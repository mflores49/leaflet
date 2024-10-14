//Funcion para obtener colores basados en el valor de total personas entidades

function entidades_ptomontt1(epersonas){
    return  epersonas  <= 50  ?  "#3288bd" :
            epersonas  <= 100 ?  "#99d594" :
            epersonas  <= 200 ?  "#e6f598" :
            epersonas  <= 400 ?  "#ffffbf" :
            epersonas  <= 600 ?  "#fee08b" :
            epersonas  <= 800 ?  "#fc8d59" :
                                 "#d53e4f" ;

};
// Funcion para aplicar los colores segun los valores de personas por entidades
function cargarstyleentidad(feature){
    return {
        fillColor : entidades_ptomontt1(feature.properties.epersonas),
        fillOpacity : 0.6,
        color : "blue",
        weight : 0.3,
        opacity: 1,
        //dashArray : "5, 5"
    };
};


//Funcion para obtener colores basados en el valor de total personas MANZANAS

function manzanas_ptomontt1(mperson){
    return  mperson  <= 50   ?  "#edf8fb" :
            mperson  <= 100  ?  "#b3cde3" :   
            mperson  <= 400  ?  "#8c96c6" :
            mperson  <= 800  ?  "#8856a7" :
                                "#810f7c" ;

};
// Funcion para aplicar los colores segun los valores de personas por MANZANAS
function cargarstylemanzana(feature){
    return {
        fillColor : manzanas_ptomontt1(feature.properties.mperson),
        fillOpacity : 0.6,
        color : "white",
        weight :0.1,
        opacity: 1,
        //dashArray : "5, 5"
    };
};



//Crear estilo simple para polígonos (comunas)
    var limite_comunas_style = {
	color		: "#d95f0e",
	weight		: 2.3,
	//dashArray	: "5, 10, 1",
	fillOpacity	: 0
};


//Crear estilo simple para polígonos (comunas)
var red_vial_style = {
	color		: "#b1a737",
	weight		: 1.5,
	//dashArray	: "5, 10, 1",
	fillOpacity	: 0
};


//Crear estilo simple para polígonos (por localidad-entidad )
var localidad_style = {
	color		: "#e6550d",
	weight		: 3.5 ,
	//dashArray	: "5, 10, 1",
	fillOpacity	: 0
};


//Crear estilo simple para polígonos (por poblacion  )
var poblacion_style = {
	color		: "purple",
	weight		: 1.5 ,
	//dashArray	: "5, 10, 1",
	fillOpacity	: 0
};





