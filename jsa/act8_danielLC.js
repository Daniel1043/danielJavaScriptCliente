/**
 * 8. Mostrar la tabla de multiplicar
 *  de un número introducido por pantalla.
 */
{
    function ejercicio8(){
        let n1= Number(prompt("Dime un numero"));
        
       
       for(let i=1;i<10+1;i++){
      
            console.log(i +" * "+n1+" = "+n1*i);
        
       }
    
        }
    
}

ejercicio8();