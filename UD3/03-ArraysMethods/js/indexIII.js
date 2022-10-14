"use strict"; 
//declaraciones

const numeros=[20,3, 5, 7, 8, 100, 35, 8];
const letras=['a','b'];

//filtros, método filter
//crear un nuevo array con el filtro indicado
const resultado=numeros.filter(numero=>numero>10);
console.table(resultado);

//find; devuelve el primer elemento que coincide con la condición

const resultadoII=numeros.find(numero=>numero==8);
console.table(resultadoII);

//every; devuelve true cuando todos los elementos cumplen la condición
const resultadoIII=numeros.every(numero=>numero>10);
console.table(`every->${resultadoIII}`); //devolverá false

//some; devuelve true cuando alguno de los elementos cumplen la condicion
const resultadoIV=numeros.some(numero=>numero>10);
console.table(`some->${resultadoIV}`); //devolverá true

//concat; concatena varios arrays
const nueva=numeros.concat(letras);
//spread operator
//const nueva=[...numeros, ...letras];
console.table(nueva);

