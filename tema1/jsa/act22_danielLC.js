/**
 * 22. Programa una función para contar el número de veces que se 
 * repite una palabra en un texto
largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 * 
 */

{
    function ejercicio22(){
       
        let letra= prompt("Dime una frase");
        let buscar= prompt("Dime una palabra que quieras buscar");

        let palabrasRepetidas = letra.split(buscar).length-1;
        

        console.log(palabrasRepetidas);
           
        
    }
    ejercicio22();
}
