"use strict";
//declaración de funciones y variables
let nombre, edad, tipo, provincia;
$(()=>{
  //establecer eventos
  $("#frmFirst").on("submit", enviar);
  $("#frmFirst").on("reset", () => {
    limpiar();
  });
  $("#edad").on("blur", mayorEdad);
  //establecer evento "input" de los text
  $(":input[name=texto]").on("input", validarInputsEvento);
 
  //establecer evento "change" de los radios
  $(":input[name=tipo]").on("change", validarTipoEvento);
    
})
function mayorEdad(e) {
  // console.log(edad.value);

  // console.log(e.target.value); //otra forma de acceder
  // console.log(this.value);
    if (this.value < 18) {
    $("#errEdad").text("La edad debe ser mayor o igual a 18 años");
    this.focus(); //mantiene el foco
  } else {
    $("#errEdad").text(""); //quitar el texto de error
  }
}

const enviar = (e) => {
 const inputs=validarText();
 const tipo= validarTipo();
 recaptcha()
   if (!inputs && !tipo){ //NO hay datos vacíos
  //   //mostrar spinner
   
     $("#spinner").show(); //muestra el spinner
     $("#exito").text('Enviando datos ....'); //mostrar el texto
    
  //   //limpiar spinner
     setTimeout(() => {
      $("#spinner").hide(); //no mostrar el spinner
      $("#exito").text('');//limpiar el mensaje
       limpiar();
  }, 3000);

  }
  //todo correcto, mostrar el spinner durante 3 segundos y el texto 'Enviando datos'
  //después limpiar el formulario, sin utilizar reload();

  e.preventDefault(); //anula el evento submit
};
const recaptcha=()=>{
  grecaptcha.ready(function() {
    grecaptcha.execute('6LfVXr8UAAAAAMS-4Ar9OHK7RLug-6H6n_qxwo1L', {action: 'formulario'})
    .then(function(token) {
      console.log(token);
        document.getElementById("recaptcha").value = token;
        
    });});
}
const validarText = () => {
 let errores=false;
  $(":input[name=texto]").each((index, elemento) => {
    const error = document.getElementById(`err${elemento.id}`);
    if (elemento.value.trim().length == 0) {
      $(`#err${elemento.id}`).text("El campo es requerido");
      errores=true;
    } else {
      $(`#err${elemento.id}`).text("");
    }
  });
  return errores;
};

const validarTipo = () => {
   
  if ($(":input[name=tipo]").is(":checked")) {
    $("#errtipo").text("");
    return false;
  } else {
    $("#errtipo").text("El campo es requerido");;
    return true;
  }
  
};

const limpiar=()=>{
 //limpiar los span
 $("span").empty();
 $(":input[name=texto]").val("");
 $(":input[name=tipo]").prop ('checked',false);
}
const validarInputsEvento=(e)=>{
  console.log(this); //no funciona. Debe ser una función con function
  console.log(e.target)
  if(e.target.value.trim().length==0){
    $(`#err${e.target.id}`).text("El campo es requerido");
  }else{
    $(`#err${e.target.id}`).text("");
  }
}
const validarTipoEvento=()=>{

}
