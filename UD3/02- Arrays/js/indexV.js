"use strict"; 
//eliminación de elementos del array


//declaraciones
const numeros=[1,2,3,4, "cinco"];


//script
//eliminar el último
console.log(numeros.pop());
console.table(numeros);
//eliminar el primero
console.log(numeros.shift());
console.table(numeros);

//eliminar el elemento que se encuentra en la posición 1
//console.log(numeros.splice(1,2));
//eliminar el elemento que se encuentra en la posición 1 y después añadir elementos
console.log(numeros.splice(1,1,"otro número",3,5));
console.table(numeros);