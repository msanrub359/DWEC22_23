"use strict";

document.addEventListener("DOMContentLoaded", () => {
  confFormulario();
  //establecer el objeto formulario
  const formulario = document.getElementById("frmFirst");

  //establecer eventos
    formulario.addEventListener("reset", () => {
       limpiar();
  });
  
})
const confFormulario=()=>{
  $( "#frmFirst" ).validate( {
    errorElement: "em",
    errorPlacement: function ( error, element ) {
      // Add the `help-block` class to the error element
      error.addClass( "invalid-feedback" );

      if ( element.prop( "type" ) === "radio" ) {
        error.insertAfter( element.parent( "div" ) );
      } else {
        error.insertAfter( element );
      }
    },
    highlight: function ( element, errorClass, validClass ) {
      $( element ).addClass("invalid").removeClass("valid")
    },
    unhighlight: function (element, errorClass, validClass) {
      $( element ).addClass("is-valid").removeClass("is-invalid")
    },
    rules: {
      nombre: "required",
      edad: {
        required: true,
        maxlength: 3,
        number:true,
        min:18
      },
      fecha: {
        required: true,
        date: true
      },
      
      tipo: "required",
      provincia:"required"
    },
    messages: {
      nombre: "El nombre del usuario debe estar rellenado"
    },
    submitHandler:((form)=>{
      enviar();
    })

  } );

}

const enviar = (e) => {
 
 recaptcha()
 
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

