"use strict"

//modificar elementos de la página

const encabezado=document.querySelector(".contenido-hero h1");
console.log(encabezado.innerText); //Si en el css está invisible no lo encuentra
console.log(encabezado.textContent); //Si está invisible, lo encuentra
console.log(encabezado.innerHTML); //se trae el HTML

//Modificar el texto
//encabezado.innerText="Estupendas Vacaciones"
document.querySelector(".contenido-hero h1").innerText="Nuevo Heading";

// //cambiar una imagen
 const imagen=document.querySelector(".card img").src="../assets/img/hacer2.jpg"
const card=document.querySelector(".info p:nth-child(2)").textContent="ejemplo cambio"
// //cambiando css
//cambiar el encabezado
 const encabezadoII=document.querySelector("h1")
// console.log(encabezadoII);
 encabezadoII.style.backgroundColor="red";
 encabezadoII.style.fontFamily="Arial";
 encabezadoII.style.textTransform="uppercase";

//utilizando clase

const cardII=document.querySelector(".card");
console.log(cardII);
console.log(cardII.classList);
console.log(cardII.className);
//añadir clase
cardII.classList.add("nuevaClase", "segundaClase");
console.log(cardII.classList);
console.log(cardII.className);
cardII.className+=" TerceraClase"
console.log(cardII.className);
//Eliminar clase
 cardII.classList.remove("nuevaClase");
 console.log(cardII.classList);