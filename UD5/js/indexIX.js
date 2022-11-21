"use strict"
document.addEventListener("DOMContentLoaded",()=>{
    //seleccionar el pie
    const pie=document.querySelector(".footer");
    const boton=document.querySelector(".btn-flotante");
    //establecer al botón el evento click
    console.log(boton.classList)
    boton.addEventListener("click", ()=>{
      if (pie.classList.contains("activo")){
        //tenga la clase activo, quitarla
        pie.classList.remove("activo");
        boton.classList.remove("activo");
        boton.textContent="Idioma y moneda";
      }else{
        //añadir la clase activo
        pie.classList.add("activo");
        boton.classList.add("activo");
        boton.textContent="x Cerrar";
      }
    })

    
})
