/**
 * 12. Programa una función para convertir grados
 *  Celsius a Fahrenheit y viceversa, pe.
miFuncion(0,"C") devolverá 32°F
 */


{
    function ejercicio12(){
        let n1= Number(prompt("Dime cuantos grados Celsius hacen y los pasare a Farenhein"));
        
        console.log((n1*9/5)+32+" F");
       
        let n2= Number(prompt("Dime cuantos grados Farenhein hacen y los pasare a Celsius"));

        console.log((n2-32)*5/9+ " C");
       
       
    
    }
    ejercicio12();
}

