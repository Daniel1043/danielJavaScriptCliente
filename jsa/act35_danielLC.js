/**
 * 35. Programa una función que dado un array numérico 
 * devuelve otro array con los números
elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]

 * 
 */

{
    function ejercicio35(cadenaNum){
   
     
      
      
      
  

     for(let i=1;i<cadenaNum.length;i++){
        cadenaNum[i]=Math.pow(cadenaNum[i],2);
     }
     console.log(cadenaNum.toString());

     
     
        
          

        
    }
    ejercicio35([1, 4, 5, 6]);
}