"use strict";
//declaración de función
let pintar = false;
document.addEventListener("DOMContentLoaded", () => {
  // agregarEventosNombre();
  agregarEventosInput();
});
const agregarEventosInput = () => {
  //establecer en una variable a los objetos input
  for( let objeto of document.getElementsByTagName("input")){
         
    //establecer eventos
    //evento mouseover; ratón entra en el objeto
    objeto.addEventListener("mouseover", () => {
      objeto.style.background = "#608ae5";
    });
    //evento mouseout; ratón sale del objeto
    objeto.addEventListener("mouseout", () => {
      objeto.style.background = "#97a0a9";
    });
    //evento mousedown; ratón sale del objeto
    objeto.addEventListener("mousedown", (e) => {
      if (e.buttons == 1) {
        pintar = true;
      }
    });
    //evento mousemove; ratón se mueve sobre el objeto
    objeto.addEventListener("mousemove", (e) => {
      if (pintar) {
        //
        objeto.style.background = "green";
      }
    });

    //evento mouseup; se suelta el botón del ratón
    objeto.addEventListener("mouseup", (e) => {
      pintar = false;
      objeto.style.background = "#608ae5";
    });
  }
  }
const agregarEventosNombre = () => {
  //establecer en una variable objeto la etiqueta de html
  const nombre = document.getElementById("nombreId");
  //establecer eventos
  //evento mouseover; ratón entra en el objeto
  nombre.addEventListener("mouseover", () => {
    nombre.style.background = "#608ae5";
  });
  //evento mouseout; ratón sale del objeto
  nombre.addEventListener("mouseout", () => {
    nombre.style.background = "#97a0a9";
  });
  //evento mousedown; ratón sale del objeto
  nombre.addEventListener("mousedown", (e) => {
    if (e.buttons == 1) {
      pintar = true;
    }
  });
  //evento mousemove; ratón se mueve sobre el objeto
  nombre.addEventListener("mousemove", (e) => {
    if (pintar) {
      //
      nombre.style.background = "green";
    }
  });

  //evento mouseup; se suelta el botón del ratón
  nombre.addEventListener("mouseup", (e) => {
    pintar = false;
    nombre.style.background = "#608ae5";
  });
};
