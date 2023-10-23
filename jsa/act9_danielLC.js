/**
 * 9. Realizar una pequeña calculadora, donde
 *  el programa solicite dos números y una operación
aritmética simple (+,-,*,/). El programa debe validar 
que los datos introducidos por el usuario
son correctos. Si no lo son, solicitarlos de nuevo,
 si lo son, mostrar el resultado.

 * 
 */
{
    function ejercicio9(){
        let n1= Number(prompt("Dime un numero"));
        let n2= Number(prompt("Dime otro numero"));
        let operacion=String(prompt("Dime que operacion quieres realizar, suma(+), resta(-), multiplicacion(*), division(/)"));
        while( isNaN(n1) ){
             n1= Number(prompt("Te has equivocado dime un numero"));
        }
        while( isNaN(n2) ){
             n2= Number(prompt("Te has equivocado dime un numero"));
        }


       switch(operacion){
        case "+":
            let suma=n1+n2;
            console.log("La suma de "+ n1+" y "+n2+" es igual a  "+ suma);
        break;

        case "-":
            let resta=n1-n2;
            console.log("La resta de "+ n1+" y "+n2+" es igual a  "+resta);
        break;

        case "*":
            let multiplicaciones=n1*n2;
            console.log("La multiplicacion de "+ n1+" y "+n2+" es igual a  "+multiplicaciones);
        break;
        
        case "/":
            let division=n1/n2;
            console.log("La division de "+ n1+" y "+n2+" es igual a  "+division);
            break;
       }
       
    
        }
    
}

ejercicio9();