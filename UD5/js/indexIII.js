"use strict"

//querySelector solo retorna el primero que encuentre
//selectores compatibles con CSS

const card=document.querySelector(".card"); 
console.log(card);

const info=document.querySelector(".premium .info");

console.log(info);

// // //seleccionar en la sección hospedaje, la segunda card
 const segundaCard=document.querySelector("section.hospedaje .card:nth-child(2)");
 console.log(segundaCard);

 //seleccionar id
const formulario=document.querySelector("#formulario");
console.log(formulario);

// // //seleccionar elemento HTML

const navegacion=document.querySelector("nav");
  console.log(navegacion);