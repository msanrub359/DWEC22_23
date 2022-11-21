

"use strict"
//traversing DOM, recorrer el DOM como un mapa

 const navegacion=document.querySelector('.navegacion');
 console.log(navegacion);
  console.log(navegacion.childNodes); //los espacios en blanco son considerados elementos
  console.log(navegacion.children); //quita los espacios en blanco
  console.log(navegacion.children[0]); // enlace Vender
  console.log(navegacion.children[0])
  console.log(navegacion.children[0].nodeName);
  console.log(navegacion.children[0].nodeType);

   const card=document.querySelector(".card");
   console.log(card.children.length)
   console.log(card.children[1]); //acceso a la clase info
  card.children[1].children[1].innerText='Traversing the DOM'; //acceso al párrafo cuya clase es categoria
// // //traversing DOM de hijo al padre
 console.log(card.parentNode);

  console.log(card.parentElement); //se recomienda
// // //acceso al hermano anterior al objeto
  console.log(card.previousSibling);
  console.log(card.nextSibling); //al hermano seguiente del objeto
// card.parentNode.previousSibling.textContent="Cambio hermano traversing"

