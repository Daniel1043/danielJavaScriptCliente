/**
 * 39. Programa una función que dado un array de 
 * elementos, elimine los duplicados, pe.e mi
Funcion (“x”,10,”x”,2,”10,10, true,true) devolverá 
[“x”,10,2,”10”,true]
 */

   
{
    function ejercicio39(cadenaNum){
        var resultado= [];
        for (var i = 0; i < cadenaNum.length; i++) {
            if (resultado.indexOf(cadenaNum[i]) === -1) {
              resultado.push(cadenaNum[i]);
            } else if (typeof cadenaNum[i] === 'string' && resultado.indexOf(cadenaNum[i]) === -1) {
              resultado.push(cadenaNum[i]);
            }
          }
        console.log(resultado.toString());
    
        
          

        
    }
    ejercicio39(["x",10,"x",2,10,"10",true,true]);
}