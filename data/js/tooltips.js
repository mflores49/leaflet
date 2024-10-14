//Función para agregar tooltips al GeoJSON (pob2015_departamental)
function tooltipentidades(feature, layer){
    if(feature.properties  && feature.properties.elocali && feature.properties.eentidad && feature.properties.epersonas && feature.properties.etotal_viv){
            var tooltipContent = 						
                                 "<b>Localidad: </b>" 				+ feature.properties.elocali 				+
                                 "<br><b>Entidad : </b>" 				+ feature.properties.eentidad 				+
                                 "<br><b>Personas :</b>" 				+ feature.properties.epersonas			    +	
                                //"<br><b>Hombres: </b>" 			    + feature.properties.ehombres               +             	
                                //"<br><b>Mujeres: </b>" 		        + feature.properties.emujeres 				+
                                //"<br><b>Edad06_14: </b>" 		   	    + feature.properties.eedad6a14 				+
                                //"<br><b>Edad14_64: </b>" 		    	+ feature.properties.eedad14a64 			+
                                //"<br><b>Edad65 y_más: </b>" 		    + feature.properties.eedad65m 				+
                                "<br><b>Total_Viviendas: </b>" 	        + feature.properties.etotal_viv             	;	
                                
                                ;	
                                
    
		layer.bindTooltip(tooltipContent, {
			permanent	: false,
			direction	: "top",
			offset		: [0, 0],
			className	: "tooltip-entidad"
		});

		//Estilo original del poligono del GeoJSON (pob2015_departamental)
		var originalStyle = {
								weight		: 0.3,
								color 		: "blue",
								opacity 	: 1,
								//dashArray 	: "5, 10, 1"
		};

		//Estilo resaltado del poligono del GeoJSON (pob2015_departamental)
		var resaltadoStyle = {
								weight		: 2,
								color 		: "#00ff00",
								opacity 	: 1,
								//dashArray 	: "5, 10, 1"
		};

		//Evento mouseover para resaltar el estilo original del polígono
		layer.on("mouseover",function(e){
			layer.setStyle(resaltadoStyle)
		});

		//Evento mouseout para volver al estilo original
		layer.on("mouseout",function(e){
			layer.setStyle(originalStyle)
		});
	}
};