"use strict";
//crear un array bidimensional, 20 filas * 20 columnas
//rellenar con números aleatorios 1-9

//declaraciones
let aNumeros = []; //crear array

const crearArray = () => {
  for (let fila = 0; fila < 20; fila++) {
    aNumeros[fila] = []; //establecer un array bidimensional al elemento
    for (let col = 0; col < 20; col++) {
      //aNumeros[fila].push(Math.round(Math.random()*(9-1))+1);
      //otra forma de asignar
      aNumeros[fila][col]=Math.round(Math.random()*(9-1))+1; 
    }
  }
};
const mostrarArray = () => {
  aNumeros.forEach((fila) => {
    //recorrer las filas
    fila.forEach((col) => {
      //recorrer las columnas
      document.write(`${col} `);
    });
    document.write("<br>"); //retorno de línea
  });
};
//cuerpo script
crearArray();
mostrarArray();
