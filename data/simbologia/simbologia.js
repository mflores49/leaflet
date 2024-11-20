
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

function manzanas_ptomontt1(mtotal_viv){
    return  mtotal_viv  <= 50   ?  "#f2f0f7" :
            mtotal_viv  <= 200  ?  "#cbc9e2" :   
            mtotal_viv  <= 400  ?  "#9e9ac8" :
            mtotal_viv  <= 600  ?  "#756bb1" :
                                   "#54278f" ;

};
// Funcion para aplicar los colores segun los valores de viviendas por MANZANAS
function cargarstylemanzana(feature){
    return {
        fillColor : manzanas_ptomontt1(feature.properties.mtotal_viv),
        fillOpacity : 0.7,
        color : "white",
        weight :0.1,
        opacity: 0.1,
        //dashArray : "5, 5"
    };
};




//Crear estilo simple para polígonos (comunas)
    var limite_comunas_style = {
	color		: "#d95f0e",
	weight		: 1.3,
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


//Crear estilo simple para polígonos (por localidad )
var localidad_style = {
	color		: "#949701 ",
	weight		: 2.5 ,
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





