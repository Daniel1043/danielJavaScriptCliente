/**
 * 10. Programa una función que determine si un número 
 * es primo (aquel que solo es divisible por
sí mismo y 1) o no, pe. miFuncion(7) devolverá true
 * 
 */

{
    function ejercicio10(){
        let n1= Number(prompt("Dime un numero, luego te dire si es primo o no"));
        var primo =true;

       for(let i=2;i<n1-1;i++){
     
            if(n1%i==0){
                primo=false;
            }
        
        
       }
       console.log("El numero introducido es: "+primo);
    
        }

    
}

ejercicio10();