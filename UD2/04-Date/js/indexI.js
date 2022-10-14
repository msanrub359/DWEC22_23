"use strict"; //Obligatorio declarar variables y constantes
//usando setInterval

let fechaHoy=new Date();
let fechaMilis=new Date(454545454);
let fechaCadena=new Date('12/12/2022')

document.write(`La fecha de hoy es ${fechaHoy}`);
document.write(`<br>La fecha parámetros milisegundos ${fechaMilis}`);
document.write(`<br>La fecha parámetros cadena ${fechaCadena}`);
document.write(`<br>El mes ${fechaHoy.getMonth()+1} el día ${fechaHoy.getDate()} del año ${fechaHoy.getFullYear()}`);

//mostrar la fecha con diferentes formatos
document.write(`<br>La fecha de hoy con formato local ${fechaHoy.toLocaleDateString()}`);
document.write(`<br>La fecha de hoy con formato  ${fechaHoy.toLocaleString()}`);
document.write(`<br>La fecha de hoy con formato II ${fechaHoy.toDateString()}`);
document.write(`<br>La hora con formato local ${fechaHoy.toLocaleTimeString()}`);