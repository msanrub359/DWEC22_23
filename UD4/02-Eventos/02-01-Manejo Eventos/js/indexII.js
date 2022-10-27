"use strict";
//declaración de función

document.addEventListener("DOMContentLoaded", ()=>{
  //funcionalidad al botón
  document.getElementById("enviar").addEventListener("click", mostrar);

})
const mostrar=(e)=>{ //el parámetro e es un objeto que tiene información del evento
  console.log(e);
  //mostrar el valor del nombre
  let capa=document.getElementById("datos");
  capa.innerHTML=`El nombre es ${document.getElementById("nombreId").value}`;

  //mostrar los value de todos los input text
 const inputs=document.getElementsByName("nombre");
 console.log(inputs)
  inputs.forEach(elemento=>{
    capa.innerHTML+=`<br>El nombre es ${elemento.value}`;
  })

 //anular la acción del evento 
 e.preventDefault();
}