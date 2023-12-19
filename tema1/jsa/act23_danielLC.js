/**
 * 23. Programa una función que valide si una palabra o
 *  frase dada, es un palíndromo (que se lee
igual en un sentido que en otro), pe. mifuncion("Salas") 
devolverá true
 * 
 */

{
    function ejercicio23(){
       
        let letra= prompt("Dime una palabra");
        let separa = letra.split("").reverse().join("");
        
        
           if(separa==letra){
                console.log("Es palindroma");
           }else{
            console.log("No es palindroma");
           }
        
    }
    ejercicio23();
}
