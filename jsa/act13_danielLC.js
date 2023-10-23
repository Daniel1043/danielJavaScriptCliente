/**
 * 13. Programa una función que calcule el factorial de un número (El factorial de un entero positivo
n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.
miFuncion(5) devolverá 120.
 * 
*/


{
    function ejercicio13(){
        let n1= Number(prompt("Dime un numero te dire su factorial"));
        let factorial=1;
        for(let i=1;i<=n1;i++){
             factorial=i*factorial;
        }
        console.log("El factorial de "+n1+ " es "+ factorial);
        
        
    
    
    
    }
    ejercicio13();
}
