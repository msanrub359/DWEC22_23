"use strict"

const evento=(e)=>{
    // Swal.fire({
    //     title:'Mensaje',
    //     text:"Ha pulsado el botón",
    //     icon:'success',
    //     confirmButtonText:"Pulsar"
    //})
    Toast.fire({
        icon: 'success',
        title: 'Has pulsado el botón'
      })
    e.preventDefault();
}
const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 2000,
    color:"green"
  
  })
  
 
//Eliminar y añadir elementos DOM

//Eliminar el nodo por si mismo

const navegacion=document.querySelector(".navegacion");
//console.log(navegacion.firstElementChild);
//navegacion.firstElementChild.remove();
//console.log(navegacion.children);
//navegacion.children[0].remove()

//Eliminar el nodo desde el padre
navegacion.removeChild(navegacion.children[0]);

//crear un enlace

const enlace=document.createElement('a');
enlace.textContent="Nuevo enlace";
enlace.setAttribute("href", '#');
enlace.addEventListener("click", evento)
//añadir al menú al final
//navegacion.appendChild(enlace);
//añadir entre otros nodos
navegacion.insertBefore(enlace, navegacion.children[1]);


