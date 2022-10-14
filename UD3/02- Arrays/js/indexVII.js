"use strict"; 
//map y diferencias con foreach

//declaraciones
const animales=["perro", "gato", "ratón", "león"];


const animalesForEach =animales.forEach(animal => animal);
 

const animalesMap=animales.map(animal=>{
    return animal;
});

console.log(("foreach"));
console.table(animalesForEach);
console.log(("map"));
console.table(animalesMap);