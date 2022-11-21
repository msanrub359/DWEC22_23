"use strict"
let elemento;

elemento=document;//extraemos todo el DOM de la página
elemento=document.head; 
elemento=document.body;
elemento=document.forms;
elemento=document.forms[0].id //acceder al id del formulario
elemento=document.forms[0].classList //acceder a las clases
elemento=document.forms[0].className //nombre de las clases
//elemento=document.forms[0].className="clase-color"
document.forms[0].classList.add("formulario-color")
elemento=document.forms[0].classList
elemento=document.links;

elemento=document.links[4];
elemento=document.images
console.log(elemento);