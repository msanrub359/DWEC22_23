"use strict"; 

//housting permite usar funciones y variables antes de que se hayan declarado
//declaraciones de variables

//declaraciones/expresiones de funciones
 
function multiplicar(a,b=1){
  return (a*b)
}

const multiplicarII=function(a, b=1){
  return a*b;
}

//Arrow functions

const multiplicarIII=(a, b=1)=>{
  return a*b;
}
//cuerpo script

console.log(multiplicar(2)); 
console.log(multiplicarII(4,5));
console.log(multiplicarIII(8,9));