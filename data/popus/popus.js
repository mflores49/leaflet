// Crear popus para el Geojson entidades censales
function popusentidad(feature, layer){
    if(feature.properties  && feature.properties.elocali && feature.properties.eentidad && feature.properties.epersonas && feature.properties.etotal_viv){
        		
		var popupContent = 	"<b>Localidad: </b>" 				+ feature.properties.elocali 				+
							"<br><b>Entidad : </b>" 				+ feature.properties.eentidad 				+
							"<br><b>Personas :</b>" 				+ feature.properties.epersonas			    +	
							"<br><b>Hombres: </b>" 			    + feature.properties.ehombres               +             	
                             "<br><b>Mujeres: </b>" 		        + feature.properties.emujeres 				+
							//"<br><b>Edad06_14: </b>" 		   	    + feature.properties.eedad6a14 				+
							//"<br><b>Edad14_64: </b>" 		    	+ feature.properties.eedad14a64 			+
							//"<br><b>Edad65 y_más: </b>" 		    + feature.properties.eedad65m 				+
							"<br><b>Total_Viviendas: </b>" 	        + feature.properties.etotal_viv             ;	
							;

	layer.bindPopup(popupContent);
	}

        
        
        
 }

// Crear popus para el Geojson manzanas censales
function popusmanzana(feature, layer){
    if(feature.properties && feature.properties.mperson && feature.properties.mhombres && feature.properties.mmujeres && feature.properties.mtotal_viv){
        var popupContent1 = 
							"<b> Personas: </b>" 		    + feature.properties.mperson					+
							"<br><b>Hombres: </b>" 			    + feature.properties.mhombres               +             	
                            "<br><b>Mujeres: </b>" 		        + feature.properties.mmujeres 				+
							"<br><b>Total_Viviendas: </b>" 	    + feature.properties.mtotal_viv             	;	
							
                            ;	
										

	layer.bindPopup(popupContent1);
	}

        
        
        
}



// Crear popus para el Geojson intervenion
function popusactividad(feature, layer){
    if(feature.properties && feature.properties.id && feature.properties.coord && feature.properties.descrip){
        var popupContent2 = "<b> Id Actividad: </b>" 						+ feature.properties. 	id		    +
							"<br><b> Coordinador: </b>" 		    + feature.properties.coord					+
							"<br><b>Descripción: </b>" 			    + feature.properties.descrip               ;             	
                           			
                            ;				

	layer.bindPopup(popupContent2);
	}

        
        
        
}