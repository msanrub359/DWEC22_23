"use strict"; //Obligatorio declarar variables y constantes
let ventana,
  i = 0;

//crear funciones
function crearVentSec() {
  console.log(ventana);
  // open("https://www.iestrassierra.com","ventana", "heigth=200,width=200");
  ventana = open("", "ventana" + i, "heigth=200,width=200");
  //crear una etiqueta h1 y un botón en la ventana secundaria
  //console.log(ventana);
  ventana.document.write("<h1>Ventana Secundaria</h1>");
  ventana.document.write("<button type='button' onclick='self.close();'>Cerrar ventana Sec</button>");
  
  
  i++;
}
function cerrarVentPrin() {
  close(); //cerrar ventana principal
}
