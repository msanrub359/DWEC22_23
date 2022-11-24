"use strict"
$(()=>{
    
    //establecer evento al botón
    btnFlotante.on("click",()=>{
        if( $(".footer").hasClass("activo")){ //averiguar si contiene una clase
            $(".footer").removeClass("activo");
            $(".btn-flotante").text("Idioma y moneda");
        }else{
            $(".footer").addClass("activo");
            $(".btn-flotante").addClass("activo");
            $(".btn-flotante").text("X Cerrar");
           
        }
               
    })
})