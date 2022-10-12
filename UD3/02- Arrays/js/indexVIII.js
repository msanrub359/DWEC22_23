"use strict"; 
//arrays bidimensionales
const electrodomesticos=[["Lavadora",100],['Microondas',200],['Horno',250]];

console.table(electrodomesticos);
console.log(electrodomesticos[1][0]); //mostrando Microondas
console.log(electrodomesticos[1][1]); //mostrando el precio 200

//mostrar array
//for
for (let index = 0; index < electrodomesticos.length; index++) {
    let cadena="";
    for (let  col= 0; col < electrodomesticos[index].length; col++) {
        if (col==0){
            cadena=`El nombre es ${electrodomesticos[index][col]}`;
        }else{
            cadena+=` El precio es ${electrodomesticos[index][col]}`;
        }
    }
    console.log(cadena);
    
}
electrodomesticos.forEach(electro=>{
    console.log(electro)
    let cadena="";
    electro.forEach((elemento,index)=>{
        if (index==0){
            cadena=`El nombre es ${elemento}`;
        }else{
            cadena+=` El precio es ${elemento}`;
        }
    });
    console.log(cadena);
});
//añadir un elemento al final
electrodomesticos.push(['Frigorífico',500])



