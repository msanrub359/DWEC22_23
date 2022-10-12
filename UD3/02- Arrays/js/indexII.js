"use strict"; 
//recorrer un array

//declaraciones
const numeros=[1,2,3,4, "cinco"];
const recorrerFor=function(){
    console.log('For tradicional');
    for (let index = 0; index < numeros.length; index++) {
        console.log(`${index}- ${numeros[index]}`);
        
    }
}
const recorrerForIn=()=>{
    console.log('For In');
    for (const index in numeros) {
        console.log(`${index}- ${numeros[index]}`);
    }
}
const recorrerForOf=()=>{
    console.log('For OF');
    for (const elemento of numeros) {
        console.log(` ${elemento}`);
    }
}
const recorrerForEach=()=>{
    console.log('For each');
    numeros.forEach((elemento,index) => {
        console.log(`${index}- ${elemento}`);
    });
}
//script
recorrerFor();
 recorrerForIn();
 recorrerForOf();
 recorrerForEach();
