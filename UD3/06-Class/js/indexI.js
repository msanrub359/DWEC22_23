"use strict"; 
/*
Las clases son una mejora sintáctica sobra la herencia basada en prototipos
-Ofrecen una sintaxis más simple para crear las classes
-No utiliza la palabra function. Utiliza la palabra class
-Las propiedades se asignan en un método constructor()
*/
//class
class Electro{
    //constructor
    constructor(nom,precio, color){
        this.nombre=nom;
        this.precio=precio;
        this.color=color;
        this.disponible=true;
    }
   
    //métodos 
    toString(){
        return `El electrodomestico es ${this.nombre} y el precio es ${this.precio} y tienen el color ${this.color}`;
    }
    static mensaje(){
        return("Creado un objeto electrodomético");
    }
}


//Herencia
class DispElec extends Electro{
    //crear el constructor
    constructor(nom, precio, color, disco, ram){
        super(nom, precio,color); //propiedades de la clase base
        this.disco=disco;
        this.ram=ram;
    }
        
   toString(){
        return `El electrodomestico es ${this.nombre} y el precio es ${this.precio} y tienen el color ${this.color}\n El disco duro es de ${this.disco} y la memoria es de ${this.ram}`;
    }
}


const frigo=new Electro("Frigo", 200,'red');
const horno=new Electro("Horno", 300,'blue');
const portatil=new DispElec("HP", 700, "white", "500Gb", '12Gb')
console.log(frigo, horno);
console.log(frigo.toString());
console.log(horno.toString());

console.log((Electro.mensaje()));
console.log(frigo.mensaje()); //error
console.log(portatil);
console.log(portatil.toString());

