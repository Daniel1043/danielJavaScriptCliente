/**
 * 14. Programa una función que devuelva el monto final después de aplicar un descuento a una
cantidad dada, pe. miFuncion(1000, 20) devolverá 800

 * 
 */

{
    function ejercicio14(){
        let n1= Number(prompt("Dime  un precio"));
        let n2= Number(prompt("Dime cuanto es su descuento"));
        let precioFinal=n1-((n1*n2)/100);

        console.log("El precio final es "+ precioFinal);
        
       
       
    
    }
    ejercicio14();
}