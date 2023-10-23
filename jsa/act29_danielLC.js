/**
 * 29. Programa una función para convertir números
 *  de base binaria a decimal y viceversa, pe.
miFuncion(100,2) devolverá 4 base 10
 */

{
    function ejercicio29(num){
   
     
        let sum = 0;

        for (let i = 0; i < num.length; i++) {
           sum += +num[i] * 2 ** (num.length - 1 - i);
        }
       
        console.log(sum);

        
    }
    ejercicio29("100");
}
