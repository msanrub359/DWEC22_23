"use strict"; 
//declaraciones

const provincias=["Córdoba", "Jaén", "Huelva", "Málaga"];

//averiguar si existe un elemento

//1 forma
const existe=provincias.indexOf("Huelva");
if (existe!=-1){
    console.log(`Existe  en la ${existe} posición`);
}else{
    console.log(`No Existe`);
}
// 2 forma
const existeII=provincias.lastIndexOf("Huelvas");
if (existeII >-1){
    console.log(`Existe  en la ${existeII} posición`);
}else{
    console.log(`No Existe`);
}

// 3 forma
const existeIII=provincias.includes("Huelvas"); //true o false
if (existeIII){
    console.log(`Existe`);
}else{
    console.log(`No Existe`);
}

// 3 forma
const existeIV=provincias.some(provincia=>provincia="Huelva"); //true o false
console.log(existeIV);
if (existeIII){
    console.log(`Existe`);
}else{
    console.log(`No Existe`);
 
    
}

//mostrar el índice 
console.log(provincias.indexOf("Huelvas"));
console.log(provincias.findIndex(p=>p=='Huelvas'));
