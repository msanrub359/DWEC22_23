"use strict"; 
//Destructuring; esto nos va a permitir extraer datos de objetos o arrays y
//asignarlos a una variable.

//declaraciones
const animales=["perro", "gato", "ratón", "león"];

//extraer un elemento del array a una variable
const animalPerro=animales[0];
console.log(animalPerro);

//const [animalPerroII]=animales; //almacenar el primer elemento
const [animalPerroII, animalGatoII]=animales; //almacena el primer y segundo elemento
const [,,,animalUltimo]=animales; //extraer el cuarto elemento
const [,...animalesII]=animales; //extrae en un array desde el segundo elemento
console.log(animalPerroII);
console.log(animalGatoII);
console.log(animalUltimo);
console.table(animalesII);