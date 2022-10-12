"use strict"; 
//Insertar datos al array

//declaraciones
const numeros=[1,2,3,4, "cinco"];


//script
//insertar un elemento al final
numeros[numeros.length]=6;
//insertar al final mediante un método
numeros.push(7);
//insertar al comienzo mediante un método
numeros.unshift(0);

console.table(numeros);