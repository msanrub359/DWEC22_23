"use strict";
//declaración de funciones y variables
let nombre, edad, tipo, provincia;
document.addEventListener("DOMContentLoaded", () => {
  //establecer el objeto formulario
  const formulario = document.getElementById("frmFirst");

  //establecer objetos del formulario
  nombre = document.getElementById("nombre");
  edad = document.getElementById("edad");
  tipo = document.getElementById("tipo");
  provincia = document.getElementById("provincia");

  //establecer eventos
  formulario.addEventListener("submit", enviar);
  formulario.addEventListener("reset", () => {
    limpiar();
  });
  edad.addEventListener("blur", mayorEdad);
});

function mayorEdad(e) {
  // console.log(edad.value);

  // console.log(e.target.value); //otra forma de acceder
  // console.log(this.value);
  const error = document.getElementById("erredad");
  if (this.value < 18) {
    error.innerText = "La edad debe ser mayor o igual a 18 años";
    this.focus(); //mantiene el foco
  } else {
    error.innerText = "";
  }
}

const enviar = (e) => {
  validarText();
  validarTipo();

  e.preventDefault();
};
const validarText = () => {
  const objetosText = document.getElementsByName("texto");
  objetosText.forEach((elemento) => {
    const error = document.getElementById(`err${elemento.id}`);
    if (elemento.value.trim().length == 0) {
      error.innerText = "El campo es requerido";
    } else {
      error.innerText = "";
    }
  });
};

const validarTipo = () => {
  const objetosTipo = document.getElementsByName("tipo");
  const error = document.getElementById(`errtipo`);
  let checked = false;
  objetosTipo.forEach((elemento) => {
    if (elemento.checked) {
      checked = true;
    }
  });
  if (checked==false) {
    error.innerText = "El campo es requerido";
  } else {
    error.innerText = "";
  }
};

const limpiar=()=>{
  
}
