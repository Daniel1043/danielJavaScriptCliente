/**
 * 
 * 37. Programa una función que dado un array 
 * de números devuelva un objeto con 2 arreglos en el
primero almacena los números pares y en el segundo los impares, pe.
miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0],
     impares: [1,3,5,7,9]}
 */

     {
        function ejercicio37(cadenaNum){
       
         
          const pares=[];
          const impares=[];
            let consta1=0;
            let consta2=0;
          for(let i=1;i<cadenaNum.length;i++){
            if(cadenaNum[i]%2==0){
                pares[consta1]=cadenaNum[i];
                consta1++;
            }else{
                impares[consta2]=cadenaNum[i];
                consta2++;
            }
         }
    
         
         console.log("Par: " +pares.toString());
         console.log("Impar:" + impares.toString());

            
              
    
            
        }
        ejercicio37([1,2,3,4,5]);
    }