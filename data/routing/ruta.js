
function addRoutingButton(map) {
    var markers = []; // Array para almacenar los marcadores
    var createMarkersEnabled = false;

    // Evento para habilitar la creación de marcadores
    document.getElementById('create-markers-button').onclick = function() {
        createMarkersEnabled = !createMarkersEnabled; // Alternar la habilitación de creación de marcadores
        this.classList.toggle('btn-success'); // Cambiar el color del botón
        this.textContent = createMarkersEnabled ? 'Dejar de Crear Marcadores' : 'Crear Marcadores'; // Cambiar el texto del botón
        document.getElementById('trace-route-button').disabled = !createMarkersEnabled; // Habilitar/Deshabilitar el botón de crear ruta
    };

    // Añadir un marcador en la posición del clic solo si la creación de marcadores está habilitada
    map.on('click', function(e) {
        if (createMarkersEnabled) {
            var marker = L.marker(e.latlng).addTo(map); // Crear un marcador en la posición clickeada
            markers.push(marker); // Añadir el marcador al array de marcadores
        }
    });

    // Añadir evento al botón de trazar ruta
    document.getElementById('trace-route-button').onclick = function() {
        traceRoute(map, markers); // Llamar a la función para trazar la ruta
        document.getElementById('clear-route-button').disabled = false; // Habilitar el botón de borrar ruta
    };

    // Añadir evento al botón de eliminar ruta
    document.getElementById('clear-route-button').onclick = function() {
        clearRoute(map, markers); // Llamar a la función para eliminar la ruta y los marcadores
        this.disabled = true; // Deshabilitar el botón de borrar ruta
        document.getElementById('trace-route-button').disabled = true; // Deshabilitar el botón de crear ruta
        document.getElementById('create-markers-button').textContent = 'Crear Marcadores'; // Resetear el texto del botón de crear marcadores
        document.getElementById('create-markers-button').classList.remove('btn-success'); // Resetear el color del botón de crear marcadores
        createMarkersEnabled = false; // Deshabilitar la creación de marcadores
    };
}

function traceRoute(map, markers) {
    if (markers.length >= 2) { // Verificar si hay al menos dos marcadores
        var waypoints = markers.map(function(marker) { // Crear una lista de puntos intermedios
            return marker.getLatLng(); // Obtener las coordenadas de cada marcador
        });

        // Remover la ruta existente si existe
        if (map.routeControl) { // Verificar si ya hay una ruta en el mapa
            map.removeControl(map.routeControl); // Eliminar la ruta existente
        }

        // Crear la nueva ruta
        map.routeControl = L.Routing.control({
            waypoints: waypoints, // Usar los puntos intermedios para la nueva ruta
	    language: 'es',
            routeWhileDragging: true, // Permitir modificar la ruta mientras se arrastra
            createMarker: function(i, waypoint, n) {
                var marker = L.marker(waypoint.latLng, {
                    draggable: true
                });
                marker.bindPopup(i === 0 ? "Inicio" : i === n - 1 ? "Fin" : "Punto intermedio");
                return marker;
            },
            lineOptions: {
                styles: [{color: 'blue', opacity: 1, weight: 5}]
            },
            showAlternatives: false,
            altLineOptions: {
                styles: [{color: 'green', opacity: 0.15, weight: 9}]
            },
            addWaypoints: true,
            routeWhileDragging: true,
            reverseWaypoints: true
        }).addTo(map);

        // Cambiar el fondo de la ventana de reporte a blanco
        document.querySelector('.leaflet-routing-container').style.backgroundColor = 'white';
    } else {
        alert("Necesitas al menos dos puntos para trazar una ruta."); // Mostrar un mensaje si no hay suficientes puntos
    }
}

function clearRoute(map, markers) {
    // Remover la ruta si existe
    if (map.routeControl) { // Verificar si hay una ruta en el mapa
        map.removeControl(map.routeControl); // Eliminar la ruta existente
        map.routeControl = null; // Restablecer el control de la ruta a null
    }

    // Remover los marcadores
    markers.forEach(function(marker) {
        map.removeLayer(marker); // Eliminar cada marcador del mapa
    });
    markers.length = 0; // Vaciar el array de marcadores
}
    