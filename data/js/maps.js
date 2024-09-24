// crear un objeto mapa
var map = L.map("map").setView([-41.529218, -72.810565], 10);




// enlazar OpenStreetMap
var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
var googleSat = L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}');
var googleStreets = L.tileLayer("https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}");
var blackAndWhite = L.tileLayer('http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png');



//agregar GeoJson

var comunas        = L.geoJson(comunas,{
                     style : limite_comunas_style,
                     //onEachFeature : popusmanzana

                    }).addTo(map); 


var red_vial_ptomontt        = L.geoJson(red_vial_ptomontt,{
    
                        style : red_vial_style,
                       //onEachFeature : popusmanzana

                    }).addTo(map);                             
                    
var localidades_ptomontt        = L.geoJson(localidades_ptomontt,{
    
                        style : localidad_style,
                        //onEachFeature : popusentidad
       
                   }).addTo(map);



         

var entidades_ptomontt        = L.geoJson(entidades_ptomontt,{
    
                                 style : cargarstyleentidad,
                                 onEachFeature : tooltipentidades
                
                   }).addTo(map);


 

var poblaciones_ptomontt1        = L.geoJson(poblaciones_ptomontt1,
                    {
                           
                       style : poblacion_style,
                      //onEachFeature : popusentidad
                          
                                      }).addTo(map);


var manzanas_ptomontt        = L.geoJson(manzanas_ptomontt,{
    
                                 style : cargarstylemanzana,
                                onEachFeature : popusmanzana

                            }).addTo(map); 



// var intervencion        = L.geoJson(intervencion,
//      {
    
//     //                              style : cargarstylemanzana,
//                                 onEachFeature : popusactividad

//                             }
//                         ).addTo(map); 


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

//--------------------------------------------------------------------------
//Agregar control de Busqueda de atributos de una capa GeoJSON (Search-Control)
var searchControl = new L.Control.Search({
    layer 			: localidades_ptomontt  ,
    propertyName	: "eentidad",
    marker  		: false,
  
    moveToLocation	: function(latlng, title, map){
        var zoom = map.getBoundsZoom(latlng.layer.getBounds());
        map.setView(latlng, zoom);
    }
});

//Evento que se ejecute cuando se encuentre una ubicación busqueda ('search:locationfound')
searchControl.on('search:locationfound', function(e){
e.layer.setStyle({
fillColor	: '#3f0', 
color 		: '#0f140e',
weight		: 10
});
if(e.layer._popup){
e.layer.openPopup();
}
}).on('search:collapsed', function(e){
    localidades_ptomontt  .eachLayer(function(layer){
    localidades_ptomontt  .resetStyle(layer)
});
});


//Agregar el control de Busqueda al Mapa
map.addControl(searchControl);
//map.removeLayer(limite_departamental)
//-------------------------------------------------------------------------------------------------





// agregar controlados de capas 
var baseMaps = {
    "Desactivar Mapas Base" : L.layerGroup([]),
    "OpenStreetMap"         : osm,
    "Google Streets"        : googleStreets,
    "Google Satelital"      : googleSat,
    "Blanco y Negro"        : blackAndWhite,
    
    };

var layers = {
        "Localidad Censal" : localidades_ptomontt,
        "Entidad Censal"    : entidades_ptomontt,
        "Manzanas Censal"   : manzanas_ptomontt,
      //  "Actividades"         : intervencion,
       // "Poblaciones comuna" : poblaciones_ptomontt1, 
        "Comunas" : comunas
   
   
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
    position  :    "bottomleft",
    collapsed :    true,
    legends   : [
        //  {
        //       label      : "Comunas",
        //       type       : "rectangle",
        //       color      : "r#2d164c",
        //       weight     : 2.5,
        //       opacity    : 1,
        //       layers     : comunas
              

        //  }, 
       
       
        {
            label 		: "Entidad 0 a 50 personas",
            type 		: "rectangle",
            fillColor	: "#3288bd",
            fillOpacity	: 0.5,
            weight		: 0.5,
            color 		: "black",
            opacity 	: 1,
            layers		: entidades_ptomontt 
        },
        {
            label 		: "Entidad 50 a 100 personas",
            type 		: "rectangle",
            fillColor	: "#99d594",
            fillOpacity	: 0.5,
            weight		: 0.5,
            color 		: "black",
            opacity 	: 1,
            layers		: entidades_ptomontt 
        },

        {
            label 		: "Entidad 100 a 200 personas",
            type 		: "rectangle",
            fillColor	: "#e6f598",
            fillOpacity	: 0.5,
            weight		: 0.5,
            color 		: "black",
            opacity 	: 1,
            layers		: entidades_ptomontt 
        },
      
        {
            label 		: "Entidad 200 a 400 personas",
            type 		: "rectangle",
            fillColor	: "#ffffbf",
            fillOpacity	: 0.5,
            weight		: 0.5,
            color 		: "black",
            opacity 	: 1,
            layers		: entidades_ptomontt 
        },

        {
            label 		: "Entidad 400 a 600 personas",
            type 		: "rectangle",
            fillColor	: "#fee08b",
            fillOpacity	: 0.5,
            weight		: 0.5,
            color 		: "black",
            opacity 	: 1,
            layers		: entidades_ptomontt 
        },

        {
            label 		: "Entidad 600 a 800 personas",
            type 		: "rectangle",
            fillColor	: "#fc8d59",
            fillOpacity	: 0.5,
            weight		: 0.5,
            color 		: "black",
            opacity 	: 1,
            layers		: entidades_ptomontt 
        },

        {
            label 		: "Entidad más 800 personas",
            type 		: "rectangle",
            fillColor	: "#d53e4f",
            fillOpacity	: 0.5,
            weight		: 0.5,
            color 		: "black",
            opacity 	: 1,
            layers		: entidades_ptomontt 
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
