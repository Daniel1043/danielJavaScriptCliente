/**
 * 1. Dados dos números indicar cuál es mayor,
 *  menor o si son iguales.
 * 
 * 
 */
{
    function ejercicio1(){
        
        let n1= prompt("Dime un numero");
        let n2= prompt("Dime otro numero");
        if (n1 == n2){
        console.log("Son iguales");
        }else if(n1>n2){
            console.log("El numero "+n1+" es mayor al numero "+n2);
        }else{
            console.log("El numero "+n2+" es mayor al numero "+n1);
        }
        }
        
}

ejercicio1();