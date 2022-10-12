"use strict"; 
//declaraciones

const numeros=[20,3, 5, 7, 8, 100, 35];

//suma los números del array
let total=0;
numeros.forEach(numero => {
    total+=numero;
});
console.log(`La suma del array números es ${total}`);

//método reduce 
const resultado=numeros.reduce((suma, numero)=>suma+numero);

console.log(`La suma del array números es ${resultado}`);