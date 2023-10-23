/**
 * 21. Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola
Mundo") devolverá "odnuM aloH".
 */


{
    function ejercicio21(){
        let letra= prompt("Dime una frase");

        let palabraInvertida= "";
        for (var i = letra.length - 1; i >= 0; i--) { 
            palabraInvertida += letra[i]; 
        }
        console.log(palabraInvertida);
           
        
    
        
       
       
    
    }
    ejercicio21();
}
