"use strict"
 const aprender=(texto)=>{
    //crear promesa
    return new Promise((resolve, reject)=>{
        if (texto!="" &&texto!=undefined){
            setTimeout(()=>{
                resolve("aprendiendo");
            },2000)
        }else{
            reject("No estoy aprendiendo")
        }
    })

 }
/**
 * Promesas .then .catch
 
console.log("Estoy");
aprender()
.then(response=>{
    console.log(response);
})
.catch(error=>{
    console.log(error);
})
.finally(()=>{
    console.log("Promesas/AsyncAwait");
})
*/
//const mostrar=async()=>{
async function mostrar(){
    console.log("Estoy");
    try {
        const response=await aprender("correcto") 
        console.log(response);

    } catch (error) {
        console.log(error)
    }
    console.log("Promesas/AsyncAwait");
}

mostrar();