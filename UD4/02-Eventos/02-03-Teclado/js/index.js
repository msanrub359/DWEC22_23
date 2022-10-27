"use strict";
//declaración de función
let pintar = false;
document.addEventListener("DOMContentLoaded", () => {
  
  agregarEventosInput();
});
const agregarEventosInput = () => {
  //establecer en una variable a los objetos input
  for( let objeto of document.getElementsByTagName("input")){
    objeto.addEventListener("keydown",(e)=>{
      console.log(e);
    }) 
    objeto.addEventListener("keyup",(e)=>{
      console.log(e);
    })    
    objeto.addEventListener("keypress",(e)=>{
      //si es un número, anular el evento
      if (!isNaN(e.key)){ //extrae la palabra Digit
        e.preventDefault();
      }
     
    })
    objeto.addEventListener("input",(e)=>{
      console.log(e);
    })
  };

    
  }

