/**
 *31. Programa una función que dada una fecha válida determine cuantos años han pasado hasta
el día de hoy, pe. miFuncion(new Date(1984,4,23)) o miFuncion (“01/12/2010”) 
 * 
 */


{
    function ejercicio31(fechaInicial){
        const fechaActual= new Date();
     
        const cumple = new Date(fechaInicial);
        var años = fechaActual.getFullYear() - cumple.getFullYear();
        var time = fechaActual.getMonth() - cumple.getMonth();
    
        if (time < 0 || (time === 0 && fechaActual.getDate() < cumple.getDate())) {
            años--;
        }
        console.log(años);

        
    }
    ejercicio31(new Date("1990-10-24"));
}
