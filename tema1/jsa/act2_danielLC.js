/**
 * 
 * 2. Modifica el programa anterior: si los 
 * números no son un número o son menores o iguales a
ceros, que los vuelva a pedir
 */

{
    function ejercicio2(){
        let n1= Number(prompt("Dime un numero"));
        let n2= Number(prompt("Dime otro numero"));
            while(n1<=0 || n2<=0 || isNaN(n1) ||  isNaN(n2) ){
            n1= prompt("Dime un numero");
            n2= prompt("Dime otro numero");
            }
       
                if (n1 == n2){
                console.log("Son iguales");
                }else if(n1>n2){
                    console.log("El numero "+n1+" es mayor al numero "+n2);
                }else{
                    console.log("El numero "+n2+" es mayor al numero "+n1);
                }
    
        }
    
}

ejercicio2();