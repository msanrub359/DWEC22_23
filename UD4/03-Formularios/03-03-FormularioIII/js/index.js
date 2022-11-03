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
    error.innerText = ""; //quitar el texto de error
  }
}

const enviar = (e) => {
 const inputs=validarText();
 const tipo= validarTipo();
 
   if (!inputs && !tipo){ //NO hay datos vacíos
  //   //mostrar spinner
     const spinner=document.getElementById("spinner");
     let exito=document.getElementById("exito");
     spinner.style.display='block';//visible el spinner
     exito.innerText='Enviando datos ....'; //mostrar el texto
    
  //   //limpiar spinner
     setTimeout(() => {
       spinner.style.display='none'; //no mostrar el spinner
       exito.innerText='';//limpiar el mensaje
       limpiar();
  }, 3000);

  }
  //todo correcto, mostrar el spinner durante 3 segundos y el texto 'Enviando datos'
  //después limpiar el formulario, sin utilizar reload();

  e.preventDefault(); //anula el evento submit
};
const validarText = () => {
  const objetosText = document.getElementsByName("texto");
  let errores=false;
  objetosText.forEach((elemento) => {
    const error = document.getElementById(`err${elemento.id}`);
    if (elemento.value.trim().length == 0) {
      error.innerText = "El campo es requerido";
      errores=true;
    } else {
      error.innerText = "";
    }
  });
  return errores;
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
    return true;
  } else {
    error.innerText = "";
    return false;
  }
  
};

const limpiar=()=>{
  const spans=document.getElementsByName("error");
  const tipos=document.getElementsByName("tipo");
  const inputs=document.getElementsByName("texto");
  spans.forEach(elemento=>{
    elemento.innerText='';//limpiar los span
    
  })
  inputs.forEach(elemento=>{
    elemento.value="";
  })
  tipos.forEach(elemento=>{
    elemento.checked=false;
  })
}
