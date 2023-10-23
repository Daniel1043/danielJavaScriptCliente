/**
 * 30. Programa una función para saber la edad de una persona,
 *  sabiendo la fecha de nacimiento.

 * 
 */


{
    function ejercicio30(fechaInicial){
        const fechaActual= new Date();
     
        const cumple = new Date(fechaInicial);
        var edad = fechaActual.getFullYear() - cumple.getFullYear();
        var time = fechaActual.getMonth() - cumple.getMonth();
    
        if (time < 0 || (time === 0 && fechaActual.getDate() < cumple.getDate())) {
            edad--;
        }
        console.log(edad);

        
    }
    ejercicio30(new Date("1990-03-15"));
}
