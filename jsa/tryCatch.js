"use strict"
{
 console.log("EJEMPLO01: TRY-CATCH-FINALLY");
 try{
    //ejemplo1  no hay error
    let a=5, b=0;
    let c=a/b;
    console.log("el resultado es "+c);

    //ejemplo 2 hay error
    const v=[1,2,3];
    v=[1,2,3,4];
    console.log("mi vector es "+v);
 }catch(error){
    console.log("Catch, captura cualquier error");
    console.log(error);
 }finally{
    console.log("Estoy en el finally, que siempre se ejectua");
 }
}

console.log("EJEMPLO02: TRY-CATCH-FINALLY - THROW");
try{
    let numero;
    numero=prompt("introduce un numero:","y");
    if(isNaN(numero)){
        throw new Error("El caracter introducido no es un  numero");
    }
    console.log(numero*numero);

}catch(error){
    console.log("Se produjo el siguiente error");
}