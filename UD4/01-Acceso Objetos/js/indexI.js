"use strict";
//declaraciones
const acceso=()=>{
    //acceso del objeto por atributo ID
    // const objetoID=document.getElementById("nombreId");
    // console.log(objetoID);
    // //mostrar el atributo name
    // console.log(objetoID.name);
    // //modificar y mostrar el atributo value
    // objetoID.value="No tiene nombre";
    // console.log(objetoID.value);
    // //simplificando
    // const valor=document.getElementById("nombreId").value;
    // console.log(valor);
    //acceder a los input text
    const objetosName=document.getElementsByName("nombre");
    console.log(objetosName);
    //acceder al value de apellidos
    console.log(objetosName[1].value);
    // mostrar el número de objetos
    console.log(objetosName.length);

    //acceder a todos los objetos input
    const objetosTag=document.getElementsByTagName("input");
    //mostrar el número de objetos
    console.log(objetosTag.length);
    //mostrar el type del 3er.objeto
    console.log(objetosTag[2].type);
    //transformar el radio a text
    objetosTag[2].type="text";

}

//body
acceso();