/**
 * 
 * 40. Programa una función para devolver la edad de una persona dada su fecha de nacimiento en
este formato dd/mm/aaa.
 */

{
    function ejercicio40(fechaInicial){
        const partes = fechaInicial.split('/');
        const diaNacimiento = parseInt(partes[0]);
        const mesNacimiento = parseInt(partes[1]) - 1; // Restar 1 al mes (los meses en JavaScript van de 0 a 11)
        const añoNacimiento = parseInt(partes[2]);

        const fechaActual= new Date();
        
   
        var edad = fechaActual.getFullYear() - añoNacimiento;
        var time = fechaActual.getMonth() - mesNacimiento;
    
        if (time < 0 || (time === 0 && fechaActual.getDate() < diaNacimiento)) {
            edad--;
        }
        console.log(edad);

        
    }
    ejercicio40("24/10/2004");
}