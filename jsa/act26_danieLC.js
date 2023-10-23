/**
 * 26. Comprueba que una 
 * cadena empieza con las letras “m” o “d” y además termina con las letras
“a” o “o”. Realiza el ejercicio con funciones de cadena
 y con expresiones regulares.
 * 
 */

{
    function ejercicio26(cadena){
   
     
      
      
      
  

     for(let i=1;i<cadena.length;i++){
        if(cadena.startsWith("m") || cadena.startsWith("d")   ){
                
            if(cadena.endsWith("a") || cadena.endsWith("o")){
                console.log(" empieza con las letras “m” o “d” y además termina con las letra a o o");
            }
            }else{
         console.log("No es la palabra buscada");
        }
     }
       
     
    
        
          

        
    }
    ejercicio26([myz1a, dyz2o, myz3o, myz4, dyzaa]);
}
