"use strict";
//declaración de función
//Disparo de eventos por burbujeo o captura. Esto se produce cuando ocurre el evento en el objeto
// más bajo nivel
//Event Bubling o propagación de eventos
document.addEventListener("DOMContentLoaded", ()=>{
   // eventoBurbujeo();
    eventoCaptura();
   
})
const eventoBurbujeo=()=>{
    document.getElementById("capaPrincipal").addEventListener("click",()=>{
        alert("capa Principal");
    })

    document.getElementById("capaSecundaria").addEventListener("click",(e)=>{
        alert("capa Secundaria");
        e.stopPropagation();

    })
}
const eventoCaptura=()=>{
    document.getElementById("capaPrincipal").addEventListener("click",()=>{
        alert("capa Principal");
    },true); //incluir el parámetro true

    document.getElementById("capaSecundaria").addEventListener("click",(e)=>{
        alert("capa Secundaria");
       

    })
}
