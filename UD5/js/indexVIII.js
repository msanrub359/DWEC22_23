"use strict"
document.addEventListener("DOMContentLoaded",()=>{
    //crear párrafos
    const parrafo1=document.createElement("p");
    const parrafo2=document.createElement("p");
    const parrafo3=document.createElement("p");
    //asignar clases
    parrafo1.classList.add("categoria", "concierto");
    parrafo2.classList.add("titulo");
    parrafo3.classList.add("precio");
    //establecer textos
    parrafo1.textContent="Acampada"
    parrafo2.textContent="En Córdoba";
    parrafo3.textContent="35€ por persona";
    //crear la capa que contiene los párrafos
    const capaInfo=document.createElement("div");
    capaInfo.classList.add("info");
    //insertar los párrafos a la capa info
    capaInfo.appendChild(parrafo1);
    capaInfo.appendChild(parrafo2);
    capaInfo.appendChild(parrafo3);
    console.log(capaInfo);

    //crear imagen
    const imagen=document.createElement("img");
    imagen.setAttribute("src", "../assets/img/populares1.jpg");
    //crear el contenedor padre
    const capaCard=document.createElement("div");
    capaCard.classList.add("card");
    //añadir todos los objetos a capaCard
    capaCard.appendChild(imagen);
    capaCard.appendChild(capaInfo);
    console.log(capaCard);
    //insertar en la capa contenedor-cards
    //document.querySelector(".contenedor-cards").appendChild(capaCard)
    document.querySelector(".contenedor-cards").insertBefore(capaCard,document.querySelector(".contenedor-cards").children[1] )
    // seleccionar opción vender
    document.querySelector(".navegacion").children[0].addEventListener("click", mostrar)
})
const mostrar=()=>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000
      
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Pulsado botón',
        color:"green",
        background:"grey"
      })
    
}
