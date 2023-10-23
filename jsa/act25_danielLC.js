/**
 * 25. Programa una función que reciba un número y evalúe si es
 *  capicúa o no (que se lee igual en
un sentido que en otro), pe. miFuncion(2002) devolverá true.
 * 
 */

{
    function ejercicio25(){
   
     
        let num= prompt("Dime un numero");
        let separa = num.split("").reverse().join("");
        

        
           if(num==separa){
                console.log("Es capicua");
           }else{
            console.log("No es capicua");
           }
      

        
    }
    ejercicio25();
}
