"use strict"; 
//crear un array 3x3 con números aleatorios 1-20
//ordenar las filas por orden ascendente
//mostrar la suma de cada fila y de cada columna
//El formato para mostrar las sumas: "La suma de la fila x es xx" o "La suma de la columna x es xx"

//declaración de variables globales y funciones
const aNumeros=[];
const crearArray=()=>{
    for (let index = 0; index < 3; index++) {
        aNumeros[index]=[];
        for (let col = 0; col < 3; col++) {
            aNumeros[index].push(Math.round(Math.random()* (20-1))+1); //genera número aleatroio
         
        }
    }
}
const ordenarArray=()=>{
    aNumeros.forEach(fila=>{
       
        fila.sort((a,b)=>a-b)
    })
}
const mostrarArray=()=>{
    aNumeros.forEach(fila=>{
        fila.forEach(numero=>{
            document.write(`${numero} - `);
        })
        document.write('<br>');
    })
}
const sumarFilas=()=>{
    aNumeros.forEach((fila, index)=>{
        const suma=fila.reduce((total, numero)=>total+numero);
        document.write(`La suma de la fila ${index} es ${suma}<br>`)
    })
}
const sumarColumnas=()=>{
    for (let index = 0; index<aNumeros.length; index++) {
        let suma=0;
        for (let col = 0; col<aNumeros[index].length ; col++) {
            suma+=aNumeros[col][index] //genera número aleatroio
      
        }
        document.write(`La suma de la columna ${index} es ${suma}<br>`)
    }
}
//cuerpo script
crearArray();
ordenarArray();
mostrarArray();
sumarFilas()
sumarColumnas();
