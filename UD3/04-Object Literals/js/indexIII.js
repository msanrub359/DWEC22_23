"use strict"; 
//declaraciones
//const nombre='Frigorífico', precio=300, color='red';

//objeto literal, agrupar todo en una variable
const electro={
    nombre:'Frigorífico',
    precio:300,
    color:'red'
}
//sellar
Object.seal(electro); //no permite modificar la estructura pero sí el contenido
electro.disponible=true;
if (Object.isSealed(electro)){
    electro.nombre="Horno"; 
    console.log(electro);
    
}else{
   console.log('No está sellado');
}

