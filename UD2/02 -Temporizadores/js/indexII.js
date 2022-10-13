"use strict"; //Obligatorio declarar variables y constantes
let ventana;
 

//crear funciones
function crearVentSec() {
  if ( ventana==undefined ||ventana.closed){
  
  ventana = open("", "ventana", "heigth=200,width=200");
  //crear una etiqueta h1 y un botón en la ventana secundaria
  //console.log(ventana);
  ventana.document.write("<h1>Ventana Secundaria</h1>");
  ventana.document.write("<button type='button' onclick='self.close();'>Cerrar ventana Sec</button>");
  
  }else{
    alert("La ventana secundaria ya está abierta")
  }
  
}
function cerrarVentPrin() {
  if ( ventana==undefined ||ventana.closed){
      self.close(); //cerrar ventana principal
  }else {
    let resultado=confirm("Ventana secundaria abierta\n¿Desea cerrarla?");
    if (resultado){
      //if(confirm("Ventana secundaria abierta\n¿Desea cerrarla?")){
      ventana.close(); //cerrar ventana secundaria
      self.close(); //cierra ventana principal
    }
  }
  
}
