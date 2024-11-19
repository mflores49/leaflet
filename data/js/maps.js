// var map = L.map("map").setView([-41.529218, -72.810565], 8);

var map = L.map("map", {
    center: [-41.529218, -72.810565], // Coordenadas del centro
    zoom:8, // Nivel de zoom inicial
    minZoom:7.5, // Nivel mínimo de zoom
    maxZoom: 16 // Nivel máximo de zoom
  });
  

// var googleStreets = L.tileLayer("https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}" ,{
//     attribution: 'Análisis y Gestión Territorial - Datum WGS-84 Proyección Geográfica CHILE | &copy; <a href="https://censo2024.ine.gob.cl/" target="_blank">INE</a>| ' +
//      '<a href="https://mapas.mop.gov.cl/" target="_blank">MOP</a> | ' +
//      '<a href="https://www.windy.com/es/-Temperatura-temp?temp,-41.456,-72.933,11" target="_blank">Windy</a> |'+
//     ' <a href=" https://firms.modaps.eosdis.nasa.gov/map/#d:today,today;l:fires_all,countries,landsat_human,protected_areas,protected_areas_regional,volcanoes,earth;@-72.87,-41.35,10.40z" target="_blank"> Firms-NASA hoy </a> | '+
//     ' <a href="https://www.linkedin.com/in/marcela-flores-ponce/" target="_blank"> Linkedin </a> '       

// });


// var traffic = L.tileLayer("https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}",{
//     attribution: ' Plataforma de Análisis y Gestión Territorial - Datum WGS-84 Proyección Geográfica CHILE| &copy; <a href="https://censo2024.ine.gob.cl/" target="_blank">Censo 2024 INE</a>| ' +
//      '<a href="https://mapas.mop.gov.cl/" target="_blank">Mapas MOP</a> | ' +
//      '<a href="https://www.windy.com/es/-Temperatura-temp?temp,-41.456,-72.933,11" target="_blank">Windy</a> |'+
//     ' <a href=" https://firms.modaps.eosdis.nasa.gov/map/#d:today,today;l:fires_all,countries,landsat_human,protected_areas,protected_areas_regional,volcanoes,earth;@-72.87,-41.35,10.40z" target="_blank"> Firms-NASA hoy </a> | '+
//     ' Desarrollo <a href="https://www.linkedin.com/in/marcela-flores-ponce/" target="_blank"> Linkedin </a> '       

// } );
// var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png" ,{
//     attribution: ' Plataforma de Análisis y Gestión Territorial - Datum WGS-84 Proyección Geográfica CHILE| &copy; <a href="https://censo2024.ine.gob.cl/" target="_blank">Censo 2024 INE</a>| ' +
//      '<a href="https://mapas.mop.gov.cl/" target="_blank">Mapas MOP</a> | ' +
//      '<a href="https://www.windy.com/es/-Temperatura-temp?temp,-41.456,-72.933,11" target="_blank">Windy</a> |'+
//     ' <a href=" https://firms.modaps.eosdis.nasa.gov/map/#d:today,today;l:fires_all,countries,landsat_human,protected_areas,protected_areas_regional,volcanoes,earth;@-72.87,-41.35,10.40z" target="_blank"> Firms-NASA hoy </a> | '+
//     ' Desarrollo <a href="https://www.linkedin.com/in/marcela-flores-ponce/" target="_blank"> Linkedin </a> '       

// });

// var googleSat1 = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',{
//     attribution: 'Plataforma de Análisis y Gestión Territorial - Datum WGS-84 Proyección Geográfica CHILE| &copy; <a href="https://censo2024.ine.gob.cl/" target="_blank">Censo 2024 INE</a>| ' +
//      '<a href="https://mapas.mop.gov.cl/" target="_blank">Mapas MOP</a> | ' +
//      '<a href="https://www.windy.com/es/-Temperatura-temp?temp,-41.456,-72.933,11" target="_blank">Windy</a> |'+
//     ' <a href=" https://firms.modaps.eosdis.nasa.gov/map/#d:today,today;l:fires_all,countries,landsat_human,protected_areas,protected_areas_regional,volcanoes,earth;@-72.87,-41.35,10.40z" target="_blank"> Firms-NASA hoy </a> | '+
//     ' Desarrollo <a href="https://www.linkedin.com/in/marcela-flores-ponce/" target="_blank"> Linkedin </a> '       

// }).addTo(map);


// var d = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}' ,{
//     attribution: ' Plataforma de Análisis y Gestión Territorial - Datum WGS-84 Proyección Geográfica CHILE| &copy; <a href="https://censo2024.ine.gob.cl/" target="_blank">Censo 2024 INE</a>| ' +
//      '<a href="https://mapas.mop.gov.cl/" target="_blank">Mapas MOP</a> | ' +
//      '<a href="https://www.windy.com/es/-Temperatura-temp?temp,-41.456,-72.933,11" target="_blank">Windy</a> |'+
//     ' <a href=" https://firms.modaps.eosdis.nasa.gov/map/#d:today,today;l:fires_all,countries,landsat_human,protected_areas,protected_areas_regional,volcanoes,earth;@-72.87,-41.35,10.40z" target="_blank"> Firms-NASA hoy </a> | '+
//     ' Desarrollo <a href="https://www.linkedin.com/in/marcela-flores-ponce/" target="_blank"> Linkedin </a> '       

// });
var googleSat = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}');

// Función para crear capas con una atribución común
function createTileLayer(url, attribution) {
    return L.tileLayer(url, {
        attribution: attribution
    });
}

// Atribución común para todas las capas
var commonAttribution = 'Análisis y Gestión Territorial - Datum WGS-84 Proyección Geográfica CHILE| &copy; ' + 
    '<a href="https://censo2024.ine.gob.cl/" target="_blank">INE</a>| ' +
    '<a href="https://mapas.mop.gov.cl/" target="_blank">MOP</a> | ' +
    '<a href="https://www.windy.com/es/-Temperatura-temp?temp,-41.456,-72.933,11" target="_blank">Windy</a> | ' +
    '<a href="https://firms.modaps.eosdis.nasa.gov/map/#d:24hrs,24hrs;l:fires_all,countries,landsat_human,protected_areas,protected_areas_regional,volcanoes,earth;@-72.89,-41.46,10.64z" target="_blank">Firms-NASA 24hrs</a> | ' +
    '<a href="https://www.linkedin.com/in/marcela-flores-ponce/" target="_blank">Linkedin</a>';

// Definición de las capas
var googleStreets = createTileLayer("https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}", commonAttribution);
var traffic = createTileLayer("https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}", commonAttribution);
var osm = createTileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", commonAttribution);
var googleSat1 = createTileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', commonAttribution);
var d = createTileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', commonAttribution);

// Añadir la capa predeterminada al mapa
googleSat1.addTo(map);



var comunas        = L.geoJson(comunas,{
                     style : limite_comunas_style,
                     

                    }).addTo(map); 

                  
var localidades_ptomontt  = L.geoJson(localidades_ptomontt,{
    
                        style : localidad_style,
                        onEachFeature : popuslocalidad
       
                   }).addTo(map);         


var manzanas_ptomontt        = L.geoJson(manzanas_ptomontt,{
    
                                 style : cargarstylemanzana,
                                onEachFeature : popusmanzana

                            }).addTo(map); 


var puentes       = L.geoJson(puentes, {
                    onEachFeature : popuspuentes,
                    pointToLayer: function(feature, latlng){
                    return L.marker(latlng, {
        
                     icon: puentes_icon })
        
        }
        
}); 

var cluster_Er = L.markerClusterGroup();

var edificacion_rural3p 	= L.geoJSON(edificacion_rural3p,{
                                onEachFeature : cargarIconEr
});

cluster_Er.addLayer(edificacion_rural3p);
                            map.addLayer(cluster_Er);

                            
                            
                            

var hotspotsLayer = L.esri.featureLayer({
                            url: 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Satellite_VIIRS_Thermal_Hotspots_and_Fire_Activity/FeatureServer/0'
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
    "Google Streets"        : googleStreets,
    "Google Traffic"        : traffic,
    "Esri Topográfico"       : d,
                          
    };

var layers = {
        
        "Comunas" : comunas,
        "Localidad Censal INE -  Censo 2017" : localidades_ptomontt,  
        "Manzanas Censal INE -  Censo 2017"   : manzanas_ptomontt,
        "Cluster Edificación Rural INE - PreCenso 2023"		: cluster_Er, 
        "Puentes MOP año 2020"		: puentes,
        "Puntos de Calor 7 días VIIRS-NASA (Hotspots)": hotspotsLayer,
};
 

L.control.layers(baseMaps, layers).addTo(map); 




// agregar miniatura map

new L.Control.MiniMap(googleSat,{
    toggleDisplay	: true,
    minimized		: true,
    position		: "bottomright"
}).addTo(map);

// agregar escala mapa
new L.Control.Scale({
        imperial: false,
         position		: "bottomright"
}).addTo(map);


//añadir leyenda
var leyenda = L.control.Legend({
    position  :    "bottomright",
    collapsed :    true,
    legends   : [

       {
        label 		: "Vivienda, vivienda colectiva y/o edificación",
        type 		: "image",
        url :        "data/plugins/images/marcador.png",

       },
       {
        label 		: "Vivienda otros usos",
        type 		: "image",
        url :        "data/plugins/images/marcador3.png",

       },
       {
        label 		: "Puentes MOP",
        type 		: "image",
        url :        "data/plugins/images/puentes.png",

       },

        {
            label 		: "Manzana 0 a 50 personas",
            type 		: "rectangle",
            fillColor	: "#edf8fb",
            fillOpacity	: 1,
            weight		: 0.5,
            color 		: "black",
            opacity 	: 1,
            layers		: manzanas_ptomontt
        },
        {
            label 		: "Manzana 50 a 100 personas",
            type 		: "rectangle",
            fillColor	: "#b3cde3",
            fillOpacity	: 0.5,
            weight		: 0.5,
            color 		: "black",
            opacity 	: 1,
            layers		: manzanas_ptomontt 
        },

        {
            label 		: "Manzana 100 a 400 personas",
            type 		: "rectangle",
            fillColor	: "#8c96c6",
            fillOpacity	: 0.5,
            weight		: 0.5,
            color 		: "black",
            opacity 	: 1,
            layers		: manzanas_ptomontt 
        },
      
        {
            label 		: "Manzana 400 a 800 personas",
            type 		: "rectangle",
            fillColor	: "#8856a7",
            fillOpacity	: 0.5,
            weight		: 0.5,
            color 		: "black",
            opacity 	: 1,
            layers		: manzanas_ptomontt 
        },

        {
            label 		: "Manzana más 1000 personas",
            type 		: "rectangle",
            fillColor	: "#810f7c",
            fillOpacity	: 0.5,
            weight		: 0.5,
            color 		: "black",
            opacity 	: 1,
            layers		: manzanas_ptomontt 
        },
    ]
}).addTo(map);



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
            color: '#ff7800',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        },
        circleStyle: {
            // Estilo del círculo
            color: '#ff7800',
            weight: 1,
            opacity: 0.5,
            fillOpacity: 0.2
        }
    });

    // Añadir el control al mapa
    locateControl.addTo(map);

 

