/**
 * 15. Indica si un NIF es válido o no.

 */



{
    function ejercicio15(){
       

  
        let n1= Number(prompt("Dime 8 numeros para un dni"));
        let letra= prompt("Dime una letra para un dni");

         if(isNaN(n1) 
                && isNaN(letra) 
                && n1.toString().length === 8
                && letra.length === 1) {
                let ordenLetras ='TRWAGMYFPDXBNJZSQVHLCKET';
                if(ordenLetras[n1 % 23] === letra.toUpperCase()) {
                    return true;
                }
        
      
                 return false;
                }       
    
    
    
 


       
       
    
    }
    ejercicio15();
}