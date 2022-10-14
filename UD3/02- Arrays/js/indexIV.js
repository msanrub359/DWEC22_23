"use strict"; 
//copias de arrays mediante el operador Spread
//permite simplificar la recogida de valores en una estructura de datos
//se representa con ...

//declaraciones
const numeros=[1,2,3,4, "cinco"];
const numerosBis=numeros; //copia
const numerosSpread=[...numeros];
const numerosSpreadII=["uno", "dos",...numeros, 6, 7];


//script
console.table(numeros);
console.table(numerosBis);
numeros.push(6);
console.table(numeros);
console.table(numerosBis);
console.table(numerosSpread);
console.table(numerosSpreadII);