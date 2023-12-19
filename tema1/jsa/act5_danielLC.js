/**
 * 5. Mostrar todos los números que 
 * hay entre dos números introducidos por el usuario.
 */

{
    function ejercicio5(){
        let n1= Number(prompt("Dime un numero"));
        let n2= Number(prompt("Dime otro numero mas grande, luego te dire los numeros que existen entre esos dos"));
        
       
       for(let i=n1+1;i<n2;i++){
        console.log(i);
       }
    
        }
        ejercicio5();
}

