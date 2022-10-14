"use strict"; 
//declaraciones
//const nombre='Frigorífico', precio=300, color='red';

//objeto literal, agrupar todo en una variable
const nombre="María";
const electro={
    nombre:'Frigorífico',
    precio:300,
    color:'red',
    //método
    toString:function(){
        return `El electrodomestico es ${this.nombre} y el precio es ${this.precio} y tienen el color ${this.color}`;
    }
}
const medidas={
    peso:'60 Kg',
    altura:'2m'
}

//copiar dos objetos en uno
const objetoI=Object.assign(electro,medidas);
console.log(objetoI);
//otra de forma de copiar; spread operator
const objetoII={...electro,...medidas};
console.log(objetoII);
//manejo this
console.log(objetoII.toString());
