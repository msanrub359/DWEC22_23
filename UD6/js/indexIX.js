"use strict"
$(()=>{

   
   $(".btn-flotante").on("click", ()=>{
     if ($(".footer").hasClass("activo")){
       //tenga la clase activo, quitarla
       $(".footer").removeClass("activo");
       $(".btn-flotante").removeClass("activo");
       $(".btn-flotante").text("Idioma y moneda");
     }else{
       //añadir la clase activo
       $(".footer").addClass("activo");
       $(".btn-flotante").addClass("activo");
       $(".btn-flotante").text("x Cerrar");
     }
   })
})
 
