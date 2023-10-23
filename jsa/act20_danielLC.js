/**
 * 
 * 20. Programa una función que repita un texto
 *  X veces, pe. miFuncion('Hola Mundo', 3) devolverá
Hola Mundo Hola Mundo Hola Mundo.
 */

{
    function ejercicio20(){
        let letra= prompt("Dime una frase");
        let n1= Number(prompt("Dime un numero"));
        
       
            let cadenaRepetida = letra.repeat(n1); 
            console.log(cadenaRepetida);

           
        
       
        
       
       
    
    }
    ejercicio20();
}