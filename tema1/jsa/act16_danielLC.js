/**
 * 16. Crea una función para dibujar un patrón de diente de sierra inverso en un cuadro de texto.
Con un carácter y un número que indique el mayor número de caracteres en la base (inversa)
del patrón.
Ejemplo 1. Datos de entrada: 'A' y 5
AAAAA
AAAA
AAA
AA
A

 * 
 */


{
    function ejercicio16(){
        let letra= prompt("Dime una letra");
        let n1= Number(prompt("Dime un numero"));
        
        for(let i=n1; i>=1;i--){
            let cadenaRepetida = letra.repeat(i); 
            console.log(cadenaRepetida);
        }
       
        
       
       
    
    }
    ejercicio16();
}