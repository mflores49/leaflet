// Crear popus para el Geojson salud
function popussalud(feature, layer){
    if(feature.properties  && feature.properties.ETIPO && feature.properties.AMBITO && feature.properties.NOMBRE && feature.properties.DEP_ADM){
        		
		var popupContent =  "<b> Red Salud - IDE Chile 2024 </b>" 		    + 
							"<b><br>Tipo: </b>" 					+ feature.properties.ETIPO 				+
							"<br><b>Ambito : </b>" 				+ feature.properties.AMBITO 			+
							"<br><b>Nombre :</b>" 				+ feature.properties.NOMBRE			    +	
							"<br><b>Dependencia: </b>" 			+ feature.properties.DEP_ADM               ;	
							;

	layer.bindPopup(popupContent);
	}     
        
 }


// Crear popus para el Geojson localidades
function popuslocalidad(feature, layer){
    if(feature.properties  && feature.properties.elocali){
        		
		var popupContent = 	"<b>Localidad: </b>" 				+ feature.properties.elocali 				;
							// "<br><b>Entidad : </b>" 				+ feature.properties.eentidad 				+
							// "<br><b>Personas :</b>" 				+ feature.properties.epersonas			    +	
							// "<br><b>Hombres: </b>" 			    + feature.properties.ehombres               +             	
                            //  "<br><b>Mujeres: </b>" 		        + feature.properties.emujeres 				+
							//"<br><b>Edad06_14: </b>" 		   	    + feature.properties.eedad6a14 				+
							//"<br><b>Edad14_64: </b>" 		    	+ feature.properties.eedad14a64 			+
							//"<br><b>Edad65 y_más: </b>" 		    + feature.properties.eedad65m 				+
							// "<br><b>Total_Viviendas: </b>" 	        + feature.properties.etotal_viv             ;	
							;

	layer.bindPopup(popupContent);
	}

        
        
        
 }
// Crear popus para el Geojson manzanas censales
function popusmanzana(feature, layer){
    if(feature.properties && feature.properties.id_mz && feature.properties.mperson && feature.properties.mhombres && feature.properties.mmujeres && feature.properties.mtotal_viv){
        var popupContent1 = "<b> Manzana - Censo 2017 INE </b>" 		    + 
							// "<br><b> ID Manzana: </b>" 		    + feature.properties.id_mz					+
							"<br><b> Personas: </b>" 		    + feature.properties.mperson					+
							"<br><b>Hombres: </b>" 			    + feature.properties.mhombres               +             	
                            "<br><b>Mujeres: </b>" 		        + feature.properties.mmujeres 				+
							"<br><b>Total_Viviendas: </b>" 	    + feature.properties.mtotal_viv             	;	
							
                            ;	
										

	layer.bindPopup(popupContent1);
	}

      
        
        
}

// Crear popus para el Geojson red_hidrica
function popusredhidrica(feature, layer){
    if(feature.properties && feature.properties.nombre_mop ){
        var popupContent1 = "<b> Red Hídrica IDE Chile </b>" 		    + 
							// "<br><b> ID Manzana: </b>" 		    + feature.properties.id_mz					+
							"<br><b> Nombre: </b>" 		    + feature.properties.nombre_mop					;
					
						
							
                            ;	
										

	layer.bindPopup(popupContent1);
	}

      
        
        
}


// && feature.properties.LARGO && feature.properties.ANCHO_TOTAL && feature.properties.MAT_ESTRIB && feature.properties.MAT_CEPAS && feature.properties.NUM_CEPAS && feature.properties.PISO && feature.properties.MAT_VIGAS

function popuspuentes(feature, layer){
    if(feature.properties && feature.properties.NOMBRE_PUE && feature.properties.ROL && feature.properties.NOMBRE_CAM && feature.properties.MAT_ESTRIB && feature.properties.MAT_CEPAS  && feature.properties.PISO && feature.properties.MAT_VIGAS){
        var popupContent2 = "<b> Puentes Mop año 2020 </b>" 		    + 
							"<b> Nombre puente: </b>" 					+ feature.properties.NOMBRE_PUE		    	+
							"<br><b> Rol: </b>" 		     			+ feature.properties.ROL					+
							"<br><b>Nombre camino: </b>" 			    + feature.properties.NOMBRE_CAM             +   
							"<br><b>Material Estribo: </b>" 			+ feature.properties.MAT_ESTRIB          	+ 
							"<br><b>Material Cepas: </b>" 				+ feature.properties.MAT_CEPAS              +
							"<br><b>Tipo piso: </b>" 			    	+ feature.properties.PISO      		        + 
							"<br><b>Material Vigas: </b>" 			    + feature.properties.MAT_VIGAS              ;      	
                           			
                            ;				

	layer.bindPopup(popupContent2);
	}

        
        
        
}