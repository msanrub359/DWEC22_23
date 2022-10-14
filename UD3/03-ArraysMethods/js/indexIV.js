"use strict"; 
//declaraciones

const numeros=[20,3, 5, 7, 8, 100, 35, 8];
const apellidos=['Torralbo','Ansio', 'Zurita', "Cano", "Riquelme"];
const alumnos=[['Pedro', 23], ['Ana', 45], ["Cándido", 19]];

//ordenar; sort
//apellidos.sort(); //ordena alf. de forma ascendente 
//console.log(apellidos);
//reverse, 
//apellidos.sort().reverse(); //ordena ascendente y da la vuelta al array
//console.log(apellidos);

//ordenación con números
// numeros.sort(function(a,b){ //ordenación ascendente
//     if (a>b){
//         return 1;
//     }else if(a<b){
//         return -1;
//     }else{
//         return 0;
//     }
    
// });
numeros.sort((a,b)=>a-b); //ascendente
console.log(numeros)
numeros.sort((a,b)=>b-a); //descendente
console.log(numeros);
//ordenar de forma descendente un array alfabético

apellidos.sort((a,b)=>b.localeCompare(a));
console.log(apellidos);

//ordenar alumnos de forma descendente por edad
alumnos.sort((a,b)=>b[1]-a[1]);
console.log(alumnos);
//ordenar alumnos de forma descendente por nombre

alumnos.sort((a,b)=>b[0].localeCompare(a[0]));
console.log(alumnos);