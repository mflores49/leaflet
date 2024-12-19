// Crear popus para el Geojson salud
function popussalud(feature, layer){
    if(feature.properties  && feature.properties.ETIPO && feature.properties.AMBITO && feature.properties.NOMBRE && feature.properties.DEP_ADM){
        		
		var popupContent =  "<b> Red Salud Minsal 2024</b>" 		    + 
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


 // Crear popus para el Geojson comuna
function popuscomuna(feature, layer){
    if(feature.properties  && feature.properties.ccomuna){
        		
		var popupContent = 	"<b>Comuna: </b>" 				+ feature.properties.ccomuna 				;

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



function popuspuentes(feature, layer){
    if(feature.properties && feature.properties.NOMBRE_PUE && feature.properties.ROL && feature.properties.NOMBRE_CAM && feature.properties.MAT_ESTRIB && feature.properties.MAT_CEPAS  && feature.properties.PISO && feature.properties.MAT_VIGAS){
        var popupContent2 = "<b> Puentes MOP 2020 </b>" 		    + 
							"<b><br> Nombre puente: </b>" 				+ feature.properties.NOMBRE_PUE		    	+
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



L.drawLocal = {
    draw: {
        toolbar: {
            actions: {
                title: "Cancelar dibujo",
                text: "Cancelar"
            },
            finish: {
                title: "Terminar dibujo",
                text: "Terminar"
            },
            undo: {
                title: "Eliminar el último punto dibujado",
                text: "Deshacer"
            },
            buttons: {
                polyline: "Dibujar una polilínea",
                polygon: "Dibujar un polígono",
                rectangle: "Dibujar un rectángulo",
                circle: "Dibujar un círculo",
                marker: "Dibujar un marcador",
                circlemarker: "Dibujar un marcador circular"
            }
        },
        handlers: {
            circle: {
                tooltip: {
                    start: "Haz clic y arrastra para dibujar un círculo."
                },
                radius: "Radio"
            },
            circlemarker: {
                tooltip: {
                    start: "Haz clic en el mapa para colocar un marcador circular."
                }
            },
            marker: {
                tooltip: {
                    start: "Haz clic en el mapa para colocar un marcador."
                }
            },
            polygon: {
                tooltip: {
                    start: "Haz clic para comenzar a dibujar una forma.",
                    cont: "Haz clic para continuar dibujando la forma.",
                    end: "Haz clic en el primer punto para cerrar esta forma."
                }
            },
            polyline: {
                error: "<strong>Error:</strong> los bordes de la forma no pueden cruzarse.",
                tooltip: {
                    start: "Haz clic para comenzar a dibujar una línea.",
                    cont: "Haz clic para continuar dibujando la línea.",
                    end: "Haz clic en el último punto para terminar la línea."
                }
            },
            rectangle: {
                tooltip: {
                    start: "Haz clic y arrastra para dibujar un rectángulo."
                }
            },
            simpleshape: {
                tooltip: {
                    end: "Suelta el ratón para terminar de dibujar."
                }
            }
        }
    },
    edit: {
        toolbar: {
            actions: {
                save: {
                    title: "Guardar cambios",
                    text: "Guardar"
                },
                cancel: {
                    title: "Cancelar edición y descartar todos los cambios",
                    text: "Cancelar"
                },
                clearAll: {
                    title: "Borrar todas las capas",
                    text: "Borrar todo"
                }
            },
            buttons: {
                edit: "Editar capas",
                editDisabled: "No hay capas para editar",
                remove: "Eliminar capas",
                removeDisabled: "No hay capas para eliminar"
            }
        },
        handlers: {
            edit: {
                tooltip: {
                    text: "Arrastra los puntos o marcadores para editar las características.",
                    subtext: "Haz clic en cancelar para deshacer los cambios."
                }
            },
            remove: {
                tooltip: {
                    text: "Haz clic en una característica para eliminarla."
                }
            }
        }
    }
};
