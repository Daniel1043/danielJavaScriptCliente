/**
 * 18. Programa una función que te devuelva el texto recortado 
 * según el número de caracteres
indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola".
 * 
 */


{
    function ejercicio18(){
        let frase= prompt("Dime una frase");

        let resultado=frase.slice(0,4);
       
        console.log(resultado)
       
       
    
    }
    ejercicio18();
}