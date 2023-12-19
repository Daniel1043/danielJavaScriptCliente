{
    function ejercicio15(){
       

  
        const dni =/[0-9]{8}[T|R|W|A|G|M|Y|F|P|D|X|B|N|J|Z|S|Q|V|H|L|C|K|E]/;

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