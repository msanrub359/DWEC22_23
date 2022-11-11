"use strict";

//declaraciones

let input, span;
document.addEventListener("DOMContentLoaded", () => {
  //asignar las etiquetas a objetos
  const boton = document.getElementById("enviar");
  span = document.getElementById("exito");
  input = document.getElementById("nombre");
  //establecer eventot al botón
  boton.addEventListener("click", comprobarExReg);
});

const comprobarExReg = () => {
  let expresion;

  //1.- Patrón que contenga la palabra mesa
  // expresion=/mesa/;
  //2.- Patrón que comience con la palabra mesa, sin diferencia entre may y min
  //expresion = /^mesa/i;
  //3.- Patrón que acabe con la palabra mesa, sin diferencia entre may y min
  //expresion = /mesa$/i;
  //4.- Patrón que solo contenga palabra mesa, sin diferencia entre may y min
  //expresion = /^mesa$/i;
  //5.- Patrón que contenga la palabra mesa o silla, sin diferencia entre may y min
  //expresion = /mesa|silla/i;
  //6.- Patrón que contenga  solo la palabra mesa o silla, sin diferencia entre may y min
  //expresion = /^(mesa|silla)$/i;
  //6.- Patrón que contenga solo números
  //expresion = /^\d+$/; //como mínimo un número
  //expresion = /^\d{4}$/; //4 números
  //expresion = /^[0-9]+$/;
  ////6.- Patrón que contenga el primer caracter sea mayúsculas, permite minúsculas, ñ u espacios en blanco
   // expresion=/^[A-ZÑ][a-zñ\sá-úª]{1,19}$/
   //7.- Patrón que compruebe números pares del 0 al 100
   // expresion=/^[0-9]?[02468]$/
  //evaluar la expresión regular
  //8.- Patrón que compruebe números del 01-15
  //expresion=/^0[1-9]|1[0-5]$/
  //9.- Patrón que compruebe hh:mm
  expresion=/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/
  if (expresion.test(input.value)) {
    //si devuelve true, el dato cumple el patrón
    span.innerText = "Correcto";
  } else {
    span.innerText = "Incorrecto";
  }
};
