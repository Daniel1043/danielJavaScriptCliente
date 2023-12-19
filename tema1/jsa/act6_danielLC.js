/**
 * 6. Mostrar todos los números impares 
 * que hay entre dos números introducidos por el usuario.
 */

{
    function ejercicio6(){
        let n1= Number(prompt("Dime un numero"));
        let n2= Number(prompt("Dime otro numero mas grande, luego te dire los numeros que existen entre esos dos"));
        
       
       for(let i=n1+1;i<n2;i++){
        if(i%2!=0){
            console.log(i);
        }
       }
    
        }
    
}

ejercicio6();