"use strict"; //Obligatorio declarar variables y constantes
let ventana= open("", "ventana", "heigth=200,width=200");
 

//crear funciones
function comenzar() {
  //crear temporizador
  setInterval(color,2000);
  
}
function color(){
  if(ventana.document.body.bgColor=="red"){
    ventana.document.body.bgColor="green";
  }else{
    ventana.document.body.bgColor="red";
  }
}
function parar() {
  
}
