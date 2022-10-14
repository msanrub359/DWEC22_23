"use strict";
//módulos
//Permitir partir el código en distintos archivos que pueden reutilizables
//para diferentes proyectos o scripts
//propiedades y métodos privados

// importar
//import {Alumno} from "./modulo.js"; //
import Alumno,{saludo} from "./modulo.js"; //alumno es default

try {
    const alumno = new Alumno("Pepe", "Pérez Rodríguez", 23);
    console.log(alumno.nombre);
   // console.log(alumno.#apellidos);
   // alumno.edad = 12; 
    console.log(saludo);
} catch (error) {
    console.log(error);
}

