"use strict"
//eliminar y añadir elementos en ejecución

//eliminar el nodo por si mismo
const navegacion=document.querySelector(".navegacion");
//console.log(navegacion.firstElementChild);
//console.log(navegacion.firstChild);
//navegacion.firstElementChild.remove();//eliminar
//children[0].remove(); //eliminar el primer menú

//eliminar por el padre
//navegacion.removeChild(navegacion.firstElementChild);
//eliminar la opción registro
//navegacion.removeChild(navegacion.children[2]);

//crear objetos
const nuevaOpcion=document.createElement("a");
nuevaOpcion.setAttribute("href", "#");
//nuevaOpcion.href="#";
//nuevaOpcion.textContent="Nueva opcion";
const texto=document.createTextNode("Nueva opcion");
nuevaOpcion.appendChild(texto);
//establecer evento
nuevaOpcion.addEventListener("click",()=>{
    alert("pasa");
})
//añadir la opción al final del menú
//navegacion.appendChild(nuevaOpcion);//

//añadir la opción en segundo lugar
navegacion.insertBefore(nuevaOpcion,navegacion.children[1]);









