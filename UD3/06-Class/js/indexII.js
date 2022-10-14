"use strict";
//getter y setter, se utilizan para asignar y extraer datos de las propiedades
//de un objeto. Es importante tener en cuenta que el nombre de los getters/setters
//no pueden ser el mismo que las propiedades, debido a que se produce un bucle
//al acceder a la propiedad. Por ello, la mayoría de los desarrolladores
//utilizan el guión bajo para nombrar la propiedad.

class Alumno {
  constructor(nom, ape, edad) {
    this._nombre = nom;
    this._apellidos = ape;
    this._edad = edad;
  }
  get nombre() {
    console.log("getter");
    return this._nombre;
  }
  set nombre(value) {
    console.log("setter");
    //controlar entrada de datos
    if (value != "") {
      this._nombre = value;
    } else {
      //generar un error
      throw "Error, el nombre no puede estar vacío";
    }
  }
  get edad() {
    console.log("getter");
    return this._edad;
  }
  set edad(value) {
    console.log("setter");
    //controlar entrada de datos
    if (value > 18) {
      this._edad = value;
    } else {
      //generar un error
      throw "Error, el alumn@ debe ser mayor de edad";
    }
  }

  //método
  toString() {
    return `El nombre del alumno es ${this._nombre} ${this._apellidos} y tiene ${this._edad} años<br>`;
  }
}
try {
    const alumno = new Alumno("Pepe", "Pérez Rodríguez", 23);
    console.log(alumno.nombre);
    console.log(alumno._apellidos);
    alumno.edad = 12; 
} catch (error) {
    console.log(error);
}

