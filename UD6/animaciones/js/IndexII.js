"use strict"

$(() => {
    //eventos
    $(".botons:contains('SlideUp')").on("click", ocultar);
    $(".botons:contains('SlideDown')").on("click", () => {
         $("h1").slideDown("Slow");
    });
    $(".botons:contains('SlideToggle')").on("click", () => {
         $("h1").slideToggle(2000, fin);
    });
})

const ocultar=()=>{
    $("h1").slideUp();
}
const fin=()=>{
    Swal.fire("Función terminada");
}