"use strict"; //Obligatorio declarar variables y constantes
//declarar variables y constantes globales
let nombre="María";
var apellidos="López";

if (nombre==="María") {
    const edad=23;
   
    console.log("Se llama "+ nombre + " "+ apellidos  + " y tiene "+ edad + " años.");
    //utilizar interpolación
    console.log(`Se llama ${nombre} ${apellidos} y tiene ${edad} años.`);
}
console.log(`Se llama ${nombre} ${apellidos} y tiene ${edad} años.`);
