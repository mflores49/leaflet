(function (factory, window) {
  "use strict";
  if (typeof define === 'function' && define.amd) {
    define(['leaflet'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('leaflet'));
  }
  if (typeof window !== 'undefined' && window.L) {
    window.L.Ruler = factory(L);
  }
}(function (L) {
  "use strict";

  L.Control.Ruler = L.Control.extend({
    options: {
      position: 'topright',
      events: {
        onToggle: function (is_active) {}
      },
      circleMarker: {
        color: 'red',
        radius: 2
      },
      lineStyle: {
        color: 'red',
        dashArray: '1,6'
      },
      lengthUnit: {
        display: 'km',
        decimal: 2,
        factor: null,
        label: 'Distancia:'
      },
      angleUnit: {
        display: '&deg;',
        decimal: 2,
        factor: null,
        label: 'Azimut:'
      }
    },

    isActive: function () {
      return this._choice;
    },

    onAdd: function (map) {
      this._map = map;
      this._container = L.DomUtil.create('div', 'leaflet-bar');
      this._container.classList.add('leaflet-ruler');
      L.DomEvent.disableClickPropagation(this._container);
      L.DomEvent.on(this._container, 'click', this._toggleMeasure, this);
      this._choice = false;
      this._defaultCursor = this._map._container.style.cursor;
      this._allLayers = L.layerGroup();
      return this._container;
    },

    onRemove: function () {
      L.DomEvent.off(this._container, 'click', this._toggleMeasure, this);
    },

    _toggleMeasure: function () {
      this._choice = !this._choice;
      this.options.events.onToggle(this._choice);
      this._clickedLatLong = null;
      this._clickedPoints = [];
      this._totalLength = 0;

      if (this._choice) {
        this._map.doubleClickZoom.disable();
        L.DomEvent.on(this._map._container, 'keydown', this._escape, this);
        L.DomEvent.on(this._map._container, 'dblclick', this._closePath, this);
        this._setupDoubleClickForMobile();
        this._container.classList.add("leaflet-ruler-clicked");
        this._clickCount = 0;
        this._tempLine = L.featureGroup().addTo(this._allLayers);
        this._tempPoint = L.featureGroup().addTo(this._allLayers);
        this._pointLayer = L.featureGroup().addTo(this._allLayers);
        this._polylineLayer = L.featureGroup().addTo(this._allLayers);
        this._allLayers.addTo(this._map);
        this._map._container.style.cursor = 'crosshair';
        this._map.on('click', this._clicked, this);
        this._map.on('mousemove', this._moving, this);
      } else {
        this._map.doubleClickZoom.enable();
        this._cleanupDoubleClickForMobile();
        L.DomEvent.off(this._map._container, 'keydown', this._escape, this);
        L.DomEvent.off(this._map._container, 'dblclick', this._closePath, this);
        this._container.classList.remove("leaflet-ruler-clicked");
        this._map.removeLayer(this._allLayers);
        this._allLayers = L.layerGroup();
        this._map._container.style.cursor = this._defaultCursor;
        this._map.off('click', this._clicked, this);
        this._map.off('mousemove', this._moving, this);
      }
    },

    _setupDoubleClickForMobile: function () {
      let lastTouch = 0;
      const touchHandler = (e) => {
        const now = Date.now();
        const delta = now - lastTouch;
        lastTouch = now;

        if (delta < 300 && delta > 0) { // Si hay dos toques rápidos (< 300 ms)
          this._closePath(); // Cierra el trazado
        }
      };

      this._map._container.addEventListener('touchstart', touchHandler);
      this._mobileTouchHandler = touchHandler; // Guarda el manejador para eliminarlo después
    },

    _cleanupDoubleClickForMobile: function () {
      if (this._mobileTouchHandler) {
        this._map._container.removeEventListener('touchstart', this._mobileTouchHandler);
        this._mobileTouchHandler = null;
      }
    },

    _clicked: function (e) {
      this._clickedLatLong = e.latlng;
      this._clickedPoints.push(this._clickedLatLong);
      L.circleMarker(this._clickedLatLong, this.options.circleMarker).addTo(this._pointLayer);

      if (this._clickCount > 0 && !e.latlng.equals(this._clickedPoints[this._clickedPoints.length - 2])) {
        if (this._movingLatLong) {
          L.polyline([this._clickedPoints[this._clickCount - 1], this._movingLatLong], this.options.lineStyle).addTo(this._polylineLayer);
        }
        this._totalLength += this._result.Distance;
      }
      this._clickCount++;
    },

    _moving: function (e) {
      if (this._clickedLatLong) {
        this._movingLatLong = e.latlng;

        if (this._tempLine) {
          this._map.removeLayer(this._tempLine);
          this._map.removeLayer(this._tempPoint);
        }

        this._tempLine = L.featureGroup();
        this._tempPoint = L.featureGroup();
        this._tempLine.addTo(this._map);
        this._tempPoint.addTo(this._map);

        this._calculateBearingAndDistance();
        L.polyline([this._clickedLatLong, this._movingLatLong], this.options.lineStyle).addTo(this._tempLine);
      }
    },

    _escape: function (e) {
      if (e.keyCode === 27) {
        if (this._clickCount > 0) {
          this._closePath();
        } else {
          this._choice = true;
          this._toggleMeasure();
        }
      }
    },

    _calculateBearingAndDistance: function () {
      const f1 = this._clickedLatLong.lat;
      const l1 = this._clickedLatLong.lng;
      const f2 = this._movingLatLong.lat;
      const l2 = this._movingLatLong.lng;
      const toRadian = Math.PI / 180;

      const deltaF = (f2 - f1) * toRadian;
      const deltaL = (l2 - l1) * toRadian;

      const a = Math.sin(deltaF / 2) ** 2 + Math.cos(f1 * toRadian) * Math.cos(f2 * toRadian) * Math.sin(deltaL / 2) ** 2;
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      const R = 6371; // Radio de la Tierra en km
      this._result = {
        Distance: R * c,
      };
    },

    _closePath: function () {
      this._map.removeLayer(this._tempLine);
      this._map.removeLayer(this._tempPoint);
      this._clickedLatLong = null;
      this._movingLatLong = null;
      this._clickCount = 0;
      this._totalLength = 0;
    }
  });

  L.control.ruler = function (options) {
    return new L.Control.Ruler(options);
  };

  return L.Control.Ruler;
}, window));

