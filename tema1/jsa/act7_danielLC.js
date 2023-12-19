/**
 * 7. Mostrar todos los números divisores
 *  de un número introducido por el usuario.
 * 
 */


{
    function ejercicio7(){
        let n1= Number(prompt("Dime un numero, luego te mostrare sus numeros divisores"));
        
       
       for(let i=1;i<n1+1;i++){
        if(n1%i==0){
            console.log(i);
        }
       }
    
    }
    
}

ejercicio7();