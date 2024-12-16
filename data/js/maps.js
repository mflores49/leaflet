var map = L.map("map", {
    center: [-41.529218, -72.810565], // Coordenadas del centro
    zoom:9, // Nivel de zoom inicial
    minZoom:7.5, // Nivel mínimo de zoom
    maxZoom: 18 // Nivel máximo de zoom
  });
  


var googleStreets = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}');

// Función para crear capas con una atribución común
function createTileLayer(url, attribution) {
    return L.tileLayer(url, {
        attribution: attribution
    });
}

// Atribución común para todas las capas
var commonAttribution = 'Planificación Territorial - Datum WGS-84 Proyección Geográfica CHILE| &copy; ' + 
    '<a href="https://censo2024.ine.gob.cl/" target="_blank">INE</a> | ' +
    '<a href="https://mapas.mop.gov.cl/" target="_blank">MOP</a> | ' +
    '<a href="https://www.geoportal.cl/geoportal/catalog/35499/Establecimientos%20de%20salud%20de%20Chile " target="_blank">MINSAL</a> | ' +
    '<a href="https://esri.ciren.cl/server/services/IDEMINAGRI/PROPIEDADES_RURALES/MapServer/WMSServer" target="_blank">CIREN</a> | ' +
    '<a href="https://arcgis.mma.gob.cl/portal/apps/webappviewer/index.html?id=6a79f6b535154991895f2bb2204b83bb&extent=-8007706.1083%2C-4019000.5424%2C-7934326.5611%2C-3982884.0466%2C102100" target="_blank">MMA</a> | ' +
   // '<a href="https://www.geoportal.cl/geoportal/catalog/34864/Mapa%20Geol%C3%B3gico%20de%20Chile%20escala%201:1.000.000 " target="_blank">Sernageomin</a> | ' +
    '<a href="https://www.geoportal.cl/catalog" target="_blank">IDE CHILE</a> | ' +
    '<a href="https://www.windy.com/es/-Temperatura-temp?temp,-41.456,-72.933,11" target="_blank">Windy</a> | ' +
    '<a href="https://firms.modaps.eosdis.nasa.gov/map/#d:24hrs,24hrs;l:fires_all,countries,landsat_human,protected_areas,protected_areas_regional,volcanoes,earth;@-72.89,-41.46,10.64z" target="_blank">Firms-NASA 24hrs</a> | ' +
    ' Desarrollo <a href="https://www.linkedin.com/in/marcela-flores-ponce/" target="_blank">Linkedin</a>';

// Definición de las capas
// var googleStreets = createTileLayer("https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}", commonAttribution);
var traffic = createTileLayer("https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}", commonAttribution);
var osm = createTileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", commonAttribution);
var googleSat1 = createTileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', commonAttribution);
var d = createTileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', commonAttribution);

// Añadir la capa predeterminada al mapa
googleSat1.addTo(map);





var red_hidrica        = L.geoJson(red_hidrica,{
    style : red_hidrica_style,
    onEachFeature : popusredhidrica
    

   }).addTo(map) ;  


var localidades_ptomontt  = L.geoJson(localidades_ptomontt,{
    
                        style : localidad_style,
                        onEachFeature : popuslocalidad
       
                   }).addTo(map);         



    // Agregar la capa WMS
    var wmsLayer = L.tileLayer.wms('https://esri.ciren.cl/server/services/IDEMINAGRI/PROPIEDADES_RURALES/MapServer/WMSServer', {
        layers: '1', // Nombre del layer que quieres usar
        format: 'image/png',
        transparent: true,
        version: '1.3.0'
      
    });

    // wmsLayer.addTo(map);



  // Agregar la capa del servicio de peligros volcánicos del volcán Calbuco
  var peligrosVolcanicosLayer = L.esri.dynamicMapLayer({
    url: 'https://sdngsig.sernageomin.cl/gissdng/rest/services/Volcanes_SNIT/01_PeligrosVolcanicos_Calbuco/MapServer',
    opacity: 0.7
}).addTo(map);

// // Habilitar eventos para mostrar popups al hacer clic en el mapa
// map.on('click', function (e) {
//     // Realizar una consulta al servicio en la ubicación clickeada
//     calbucoLayer.identify().on(map).at(e.latlng).run(function (error, featureCollection) {
//         if (error) {
//             console.error('Error al consultar el servicio:', error);
//             return;
//         }

//         if (featureCollection.features.length > 0) {
//             // Extraer los atributos del primer feature encontrado
//             var attributes = featureCollection.features[0].properties;

//             // Crear el contenido del popup
//             var popupContent = '<b>Datos del servicio de Peligros Volcánicos Calbuco:</b><br>';
//             for (var key in attributes) {
//                 popupContent += `<b>${key}:</b> ${attributes[key]}<br>`;
//             }

//             // Mostrar el popup en el mapa
//             L.popup()
//                 .setLatLng(e.latlng)
//                 .setContent(popupContent)
//                 // .openOn(map)
//                 ;
//         } else {
//             // Mostrar un mensaje si no hay datos disponibles
//             L.popup()
//                 .setLatLng(e.latlng)
//                 .setContent('No hay datos disponibles en este punto.')
//                 // .openOn(map)
//                 ;
//         }
//     });
// });



// // Integrar el servicio de Peligros Volcánicos Calbuco
// var peligrosVolcanicosLayer = L.esri.featureLayer({
//     url: 'https://sdngsig.sernageomin.cl/gissdng/rest/services/Volcanes_SNIT/01_PeligrosVolcanicos_Calbuco/MapServer/0',
//     style: function () {
//         return {
//             color: '#d73027', // Color para el contorno
//             weight: 2,
//             fillColor: '#fc8d59', // Color para el relleno
//             fillOpacity: 0.6
//         };
//     }
// }).addTo(map);

// // Mostrar popup al hacer clic en un elemento
// peligrosVolcanicosLayer.on('click', function (e) {
//     var popupContent = '<b>Datos del Peligro Volcánico:</b><br>';
//     for (var key in e.layer.feature.properties) {
//         popupContent += `<b>${key}:</b> ${e.layer.feature.properties[key]}<br>`;
//     }
//     L.popup()
//         .setLatLng(e.latlng)
//         .setContent(popupContent)
//         .openOn(map);
// });


//      // Agregar la capa del servicio
//     var geologiaBase = L.esri.dynamicMapLayer({
//         url: 'https://sdngsig.sernageomin.cl/gissdng/rest/services/Geoportal/GeologiaBase/MapServer',
//         opacity: 0.7
//       });
  
//       // Agregar eventos para mostrar popups
//       map.on('click', function (e) {
//         // Hacer la consulta al servicio en el punto clickeado
//         geologiaBase.identify().on(map).at(e.latlng).run(function (error, featureCollection) {
//           if (error) {
//             console.error('Error al consultar el servicio:', error);
//             return;
//           }
  
//           if (featureCollection.features.length > 0) {
//             // Extraer los datos de los atributos de la primera feature
//             var attributes = featureCollection.features[0].properties;
  
//             // Crear el contenido del popup
//             var popupContent = '<b>Datos Servicio Geología Base 1:1.000.000 Sernageomin:</b><br>';
//             for (var key in attributes) {
//               popupContent += `<b>${key}:</b> ${attributes[key]}<br>`;
//             }
  
//             // Mostrar el popup en el mapa
//             L.popup()
//               .setLatLng(e.latlng)
//               .setContent(popupContent)
//               .openOn(map)
//               ;
//           } else {
//             // Mostrar un mensaje si no hay datos en el lugar clickeado
//             L.popup()
//               .setLatLng(e.latlng)
//               .setContent('No hay datos disponibles en este punto.')
//               .openOn(map)
//               ;
//           }
//         });
//       });


var humedalesLayer = L.esri.featureLayer({
    url: 'https://arcgis.mma.gob.cl/server/rest/services/SIMBIO/SIMBIO_HUMEDALES/MapServer/0',
    style: function () {
        return {
            color: '#2171b5',
            weight: 2,
            fillColor: '#6baed6',
            fillOpacity: 0.5
        };
    },
    minZoom: 11, // Nivel de zoom mínimo para mostrar la capa
    maxZoom: 18  // Nivel de zoom máximo para mostrar la capa
}).addTo(map);


    // // Integrar el servicio de humedales NOTA
    // var humedalesLayer = L.esri.featureLayer({
    //     url: 'https://arcgis.mma.gob.cl/server/rest/services/SIMBIO/SIMBIO_HUMEDALES/MapServer/0',
    //     style: function () {
    //         return {
    //             color: '#2171b5',
    //             weight: 2,
    //             fillColor: '#6baed6',
    //             fillOpacity: 0.5
    //         };
    //     }
    // })
    // // .addTo(map)
    // ;

    // Mostrar popup al hacer clic en un elemento NOTA
    humedalesLayer.on('click', function (e) {
        var popupContent = '<b>Datos del Humedal:</b><br>';
        for (var key in e.layer.feature.properties) {
            popupContent += `<b>${key}:</b> ${e.layer.feature.properties[key]}<br>`;
        }
        L.popup()
            .setLatLng(e.latlng)
            .setContent(popupContent)
            .openOn(map);
    });

   



var comunas        = L.geoJson(comunas,{
        style : limite_comunas_style,
        // onEachFeature : popuscomuna

       }).addTo(map); 

var manzanas_ptomontt        = L.geoJson(manzanas_ptomontt,{
    
                                 style : cargarstylemanzana,
                                onEachFeature : popusmanzana

                            }).addTo(map); 


var puentes       = L.geoJson(puentes, {
                    onEachFeature : popuspuentes,
                    pointToLayer: function(feature, latlng){
                    return L.marker(latlng, {
        
                     icon: puentes_icon
                     })
        
        }
        
}) ; 






var red_salud = L.geoJson(red_salud, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, red_salud_style); // Crea un marcador circular con el estilo definido
    },
    onEachFeature : popussalud, // Si tienes pop-ups o eventos puedes habilitar onEachFeature:
  
}).addTo(map);


// var cluster_Er = L.markerClusterGroup();

// var edificacion_rural3p 	= L.geoJSON(edificacion_rural3p,{
//                                 onEachFeature : cargarIconEr
// });

// cluster_Er.addLayer(edificacion_rural3p);
//                             map.addLayer(cluster_Er);

                            



// Grupo de clusters
const markers = L.markerClusterGroup();

// Función para añadir los puntos al cluster con íconos personalizados
function cargarPuntosConIconos(material) {
    markers.clearLayers(); // Limpiar los marcadores actuales

    // Filtrar los puntos según el material seleccionado
    const filteredFeatures = material === 'all'
        ? edificacion_rural3p.features
        : edificacion_rural3p.features.filter(feature => feature.properties.USO_EDIFIC === material);

    // Crear y agregar marcadores al cluster
    filteredFeatures.forEach(feature => {
        const { coordinates } = feature.geometry;
        const { USO_EDIFIC } = feature.properties;

        const marker = L.marker([coordinates[1], coordinates[0]], {
            icon: obtenerIconEr(feature) // Asignar el ícono correcto
        }).bindPopup(`Uso Edificación: ${USO_EDIFIC}`);

        markers.addLayer(marker);
    });

    // Agregar el grupo de clusters al mapa
    map.addLayer(markers);
}

// Inicializar el mapa con todos los puntos
cargarPuntosConIconos('all');

// Manejar el cambio en el select para filtrar puntos
document.getElementById('material-select').addEventListener('change', function () {
    const selectedMaterial = this.value;
    cargarPuntosConIconos(selectedMaterial);
});






// var hotspotsLayer = L.esri.featureLayer({
//     url: 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Satellite_VIIRS_Thermal_Hotspots_and_Fire_Activity/FeatureServer/0',
//     onEachFeature: function (feature, layer) {
//       // Verificar si acq_time es una marca de tiempo Unix
//       var acqTime = feature.properties.acq_time;
  
//       // Si acq_time es un número (marca de tiempo Unix en milisegundos)
//       if (typeof acqTime === 'number') {
//         acqTime = new Date(acqTime);  // Convierte la marca de tiempo a un objeto Date de JavaScript
//         acqTime = acqTime.toUTCString();  // Convierte a una cadena legible en formato UTC
//       }
  
//       // Si acq_time ya está en formato de fecha legible, no es necesario hacer ninguna conversión
//       // Ejemplo de formato: "2024-01-01T12:00:00Z"
  
//       // Crear el popup con la fecha formateada
//       layer.bindPopup("Detección Punto Calor NASA VIIRS Hora UTC: " + acqTime);
      
//       // Crear un ícono rojo usando L.divIcon
//       var redIcon = L.divIcon({
//         className: 'custom-icon',  // Puedes agregar una clase CSS si es necesario
//         html: '<div style="background-color: red; width: 12px; height: 12px; border-radius: 50%;"></div>',
//         iconSize: [30, 30]  // Tamaño del ícono
//       });
    
//       // Asignar el ícono rojo al marcador
//       layer.setIcon(redIcon);
//     }
//   });
  




var hotspotsLayer = L.esri.featureLayer({
    url: 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Satellite_VIIRS_Thermal_Hotspots_and_Fire_Activity/FeatureServer/0',
    onEachFeature: function (feature, layer) {
      // Verificar si acq_time es una marca de tiempo Unix
      var acqTime = feature.properties.acq_time;
  
      // Si acq_time es un número (marca de tiempo Unix en milisegundos)
      if (typeof acqTime === 'number') {
        acqTime = new Date(acqTime);  // Convierte la marca de tiempo a un objeto Date de JavaScript
        acqTime = acqTime.toUTCString();  // Convierte a una cadena legible en formato UTC
      }
  
      // Si acq_time ya está en formato de fecha legible, no es necesario hacer ninguna conversión
      // Ejemplo de formato: "2024-01-01T12:00:00Z"
  
      // Crear el popup con la fecha formateada
      layer.bindPopup("Detección Punto Calor NASA VIIRS Hora UTC: " + acqTime);
      
      // Crear un ícono rojo usando L.divIcon
      var redIcon = L.divIcon({
        className: 'custom-icon',  // Puedes agregar una clase CSS si es necesario
        html: '<div style="background-color: red; width: 12px; height: 12px; border-radius: 50%;"></div>',
        iconSize: [30, 30]  // Tamaño del ícono
      });
    
      // Asignar el ícono rojo al marcador
      layer.setIcon(redIcon);
    }
  }).addTo(map);







//Agregar el control de coordenadas
L.control.coordinates(
    {
    position			: "topright",
    decimals			: 6,
    decimalSeparator	: ".",
    labelTemplateLat	: "Latitud: {y}",
    labelTemplateLng	: "Longitud: {x}",
    useLatLngOrder		: true,
    enableUserInput		: true

}
).addTo(map);



// agregar escala mapa
new L.Control.Scale({
        imperial        : false,
        position		: "bottomright"
        }).addTo(map);

// agregar miniatura map

new L.Control.MiniMap(googleStreets,{
    toggleDisplay	: true,
    minimized		: true,
    position		: "bottomright"
    }).addTo(map);



    //añadir leyenda

    var leyenda = L.control.Legend({
        position  :    "bottomright",
        collapsed :    true,
        legends   : [


            {
                label 		: "Red de Salud Minsal 2024",
                type 		: "image",
                url         : "data/plugins/images/salud.png",
                layers		: red_salud
        
               },
    
            {
                label 		: "Red Hídrica - IDE Chile 2022",
                type 		: "polyline",
                fillColor	: "#f2f0f7",
                fillOpacity	: 1,
                weight		: 0.5,
                color 		: "blue",
                opacity 	: 1,
                //layers		: red_hidrica,
            },
          
            {
                label 		: "Manzana urbana 0 a 50 viviendas",
                type 		: "rectangle",
                fillColor	: "#f2f0f7",
                fillOpacity	: 1,
                weight		: 0.5,
                color 		: "black",
                opacity 	: 1,
                // layers		: manzanas_ptomontt
            },
            {
                label 		: "Manzana urbana 50 a 200 viviendas",
                type 		: "rectangle",
                fillColor	: "#cbc9e2",
                fillOpacity	: 0.5,
                weight		: 0.5,
                color 		: "black",
                opacity 	: 1,
                // layers		: manzanas_ptomontt 
            },
        
            {
                label 		: "Manzana urbana 200 a 400 viviendas",
                type 		: "rectangle",
                fillColor	: "#9e9ac8",
                fillOpacity	: 0.5,
                weight		: 0.5,
                color 		: "black",
                opacity 	: 1,
                // layers		: manzanas_ptomontt 
            },
          
            {
                label 		: "Manzana urbana 400 a 600 viviendas",
                type 		: "rectangle",
                fillColor	: "#756bb1",
                fillOpacity	: 0.5,
                weight		: 0.5,
                color 		: "black",
                opacity 	: 1,
                // layers		: manzanas_ptomontt 
            },
        
            {
                label 		: "Manzana urbana 600 viviendas y más",
                type 		: "rectangle",
                fillColor	: "#54278f",
                fillOpacity	: 0.5,
                weight		: 0.5,
                color 		: "#54278f",
                opacity 	: 1,
                // layers		: manzanas_ptomontt 
            },
    
           {
            label 		: "Vivienda, vivienda colectiva y/o edificación rural",
            type 		: "image",
            url :        "data/plugins/images/marcador.png",
            // layers		: cluster_Er 
    
           },
           {
            label 		: "Vivienda rural otros usos",
            type 		: "image",
            url :        "data/plugins/images/marcador3.png",
            // layers		: cluster_Er
    
           },
        
    
           {
            label 		: "Cluster alto vivienda rural",
            type 		: "image",
            url :        "data/plugins/images/naranjo.png",
            // layers		: cluster_Er
    
           },
    
           {
            label 		: "Cluster medio vivienda rural",
            type 		: "image",
            url :        "data/plugins/images/amarillo.png",
            // layers		: cluster_Er
    
           },
    
           {
            label 		: "Cluster bajo vivienda rural",
            type 		: "image",
            url :        "data/plugins/images/verde.png",
            // layers		: cluster_Er
    
           },
    
           {
            label 		: "Puentes MOP",
            type 		: "image",
            url :        "data/plugins/images/puentes.png",
            layers		: puentes
    
           },
    
           {
            label 		: "Actividad térmica sensores NASA VIIRS, últimos 7 días",
            type 		: "image",
            url :        "data/plugins/images/rojo.png",
            layers		: hotspotsLayer
    
           },
    
           
    ]
    }).addTo(map);

//Agregar control de Geocodificación
L.Control.geocoder({
        position		: "topleft",
        placeholder		: "Buscar direccion...",
        errorMessage	: "No se encontraron resultados de su dirección"
        }).addTo(map);




// agregar controlados de capas 
var baseMaps = {
    "Desactivar Mapas Base" : L.layerGroup([]),
    "Google Satelital"      : googleSat1,
    "OpenStreetMap"         : osm,
    "Google Tráfico"        : traffic,
    "Esri Topográfico"       : d,
                          
    };

var layers = {
        "Comunas" : comunas,
        "Manzanas Censo 2017 - INE"   : manzanas_ptomontt,
        "Localidad Censo 2017 - INE" : localidades_ptomontt,
        "Red Salud - Minsal 2024" : red_salud,
        
        "Red Hídrica - IDE Chile 2022" :  red_hidrica, 
        "Propiedad Rural 2016 - CIREN" :wmsLayer,
      
        
        // "Cluster Edificación Rural - PreCenso 2023 INE1 "		: cluster_Er, 
        "Puentes MOP 2020"		: puentes,
        "Inventario Nacional de Humedales - MMA": humedalesLayer,
        "Cluster Edificación Rural - PreCenso 2023 INE": markers,
        "Peligros Volcánicos Calbuco" : peligrosVolcanicosLayer,
        // "Geologia base 1:1000000 - Sernageomin 2010" : geologiaBase,
        "Puntos de Calor últimos 7 días VIIRS-NASA": hotspotsLayer,
         
       
};
 

L.control.layers(baseMaps, layers).addTo(map); 








    // Añadir el control de localización
    var locateControl = L.control.locate({
        position: 'topleft',
        drawCircle: true, // Dibujar un círculo alrededor de la posición
        follow: true, // No seguir al usuario
        setView: true, // Centrar el mapa en la ubicación
        keepCurrentZoomLevel: false,
        markerStyle: {
            // Estilo del marcador
            radius: 15,
            color: '#ff6a00',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        },
        circleStyle: {
            // Estilo del círculo
            color: '#ed1109',
            weight: 1,
            opacity: 0.5,
            fillOpacity: 0.2
        }
    });

    // Añadir el control al mapa
    locateControl.addTo(map);


      // Evento para el ícono i
    document.getElementById('infoIcon').addEventListener('click', function () {
        alert("Para optar a actualizaciones, limpie temporales de su navegador.");
    });
 

    // L.control.ruler({
    //     position: 'topleft',
    //     language: {
    //       km: 'kilómetros',  // Cambia "km" por "kilómetros"
    //       m: 'metros',       // Cambia "m" por "metros"
    //       nm: 'millas náuticas',
    //       ft: 'pies'
    //     }
    //   }).addTo(map);


    //  L.control.ruler({position: 'bottomright'}).addTo(map);
