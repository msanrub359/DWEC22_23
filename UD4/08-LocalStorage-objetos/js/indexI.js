let nombre, ape, edad
document.addEventListener("DOMContentLoaded", () => {
    nombre = document.getElementById("nombreId");
    ape = document.getElementById("apellidosId");
    edad = document.getElementById("edadId");
    //establecer los eventos a los botones
    document.getElementById("crear").addEventListener("click", crearC);
    document.getElementById("listar").addEventListener("click", listarC)
})

const crearC = () => {
    let objeto = {
        nom: nombre.value,
        ape: ape.value,
        edad: parseInt(edad.value)
    }
    //convertir objeto a cadena
    objeto = JSON.stringify(objeto);
    localStorage.setItem("Persona" + (localStorage.length + 1), objeto);

    //limpiar inputs
    for (let elemento of document.getElementsByTagName("input")) {
        elemento.value = ""
    }


}
const listarC = () => {
    document.getElementById("capa").innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        let objeto = localStorage.getItem(localStorage.key(i)); //string
        //convertir la cadena a objeto
        let clave = JSON.parse(decodeURIComponent(objeto));
       
        document.getElementById("capa").innerHTML += "Nombre= " + clave.nom + " Apellidos=" + clave.ape + " Edad=" + clave.edad + "<br>"

    }
}
