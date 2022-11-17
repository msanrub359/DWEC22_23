"use strict"
window.addEventListener("DOMContentLoaded",()=>{
    const pie=document.querySelector(".footer");
    const btnFlotante=document.querySelector(".btn-flotante");
    //establecer evento al botón
    btnFlotante.addEventListener("click",()=>{
        if(pie.classList.contains("activo")){ //averiguar si contiene una clase
            pie.classList.remove("activo");
            btnFlotante.classList.remove("activo");
            btnFlotante.textContent="Idioma y moneda"
        }else{
            pie.classList.add("activo");
            btnFlotante.classList.add("activo");
            btnFlotante.textContent="X Cerrar"
        }
               
    })
})