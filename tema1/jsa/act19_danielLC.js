/**
 * 19. Programa una función que dada 
 * una String te devuelva un Array de textos separados por
cierto carácter, pe. miFuncion('hola que tal', ' ') 
devolverá ['hola', 'que', 'tal']
 * 
 */

{
    function ejercicio19(){
        let frase= prompt("Dime una frase");

        let resultado=frase.split(" ");
       
        console.log(resultado)
       
       
    
    }
    ejercicio19();
}