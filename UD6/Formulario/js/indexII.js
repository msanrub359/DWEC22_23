"use strict";

let nombre, edad, tipo, provincia;
//declaración de función
$(()=>{
   //establecer eventos
  $("#frmFirst").on("submit", enviar);
  $("#frmFirst").on("reset", (e)=>{
    limpiar();
    e.preventDefault();
  });
  console.log($(":input[name=texto]"));
  $(":input[name=texto]").on ("input", validarVaciosInputs)
  
  $(":radio[name=tipo]").on("change", validarVaciosTipos);
  
  $("#fecha").on("blur", mayorEdad);

});

const mayorEdad = (e) => {
  
  if (e.target.value < 18) {
    $("#erredad").text("La edad debe ser mayor o igual a 18 años");
    e.target.focus(); //sigue con el foco
  } else {
    $("#erredad").text("");
  }
};

const enviar = (e) => {
  e.preventDefault();
  const inputs=validarInputs();
  const tipos=validarTipo();
  if (!tipos && !inputs) {
    
    $("#spinner").show();
    //activar el captcha
    
    grecaptcha.ready(function() {
      grecaptcha.execute('6Le1YbQiAAAAABzOE5LhOysnvY_ECpfH65hzyFQD', {action: 'submit'}).then(function(token) {
          document.getElementById("recaptcha").value=token;
          console.log( token);
      });
    });
    
    $("#exito").text("Datos enviados correctamente");
    //limpiar el spinner
    setTimeout(() => {
      $("#spinner").hide();
      $("#exito").text("");
      limpiar();
    }, 3000);
  }
};

const validarVaciosTipos=(e)=>{
  if (e.target.checked){
    $("#errtipo").text("");
  }else{
    $("#errtipo"),text("El campo debe estar relleno");
  }
}
const validarVaciosInputs=(e)=>{
  if (e.target.value.trim().length==0){
    $(`#err${e.target.id}`).text("El campo debe estar relleno");
   
  }else{
    $(`#err${e.target.id}`).text("");
  }
}
const validarInputs = () => {
  //recorrer todos los objtos cuyo name es texto
  const errores=[];

  $(":input[name=texto]").each((index,input) => {
    if (input.value.trim() == "") {
      $(`#err${input.id}`).text("El campo debe estar relleno");
      $(input).css("border","1px solid #ea0808");
      errores[index]=true;
    } else {
      $(`#err${input.id}`).text("");
      $(input).css("border","1px solid #07090b");
      errores.splice(index,1)
     
    }
  });

  return errores.length!=0 ? true: false;
};
const validarTipo = () => {
 
  let error = true;
  if ($(":input[name=tipo]").is(':checked')){
    $("#errtipo").text("");
    error=false
  }else{
    $("#errtipo").text("Dato requerido");
    
  }
  
  };

const limpiar=()=>{
  $(":input[name=texto]").val("");
  $(":input[name=tipo]").empty();
  $(":input[name=error]").empty();
  
}

