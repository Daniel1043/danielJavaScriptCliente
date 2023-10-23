/**
 * 4. Utilizando un bucle,
 *  mostrar la suma, el producto y 
 * la media de los números introducidos
    hasta introducir un número negativo y 
    entonces mostrar el resultado.
 * 
 */

    {
        function ejercicio4(){
            // Equivale a declararla fuera de la funcion como var
            let n1= prompt("Dime un numero");
            n1= prompt("Dime un numero, negativo para salir");

            let resultadoSuma=0+n1;
            let resultadoProducto=1*n1;
            let media=0;

            while(n1>0){
                resultadoSuma=resultadoSuma+n1;
                resultadoProducto=resultadoProducto*n1;
                media++;
                n1= prompt("Dime un numero, negativo para salir");
              
            }
            console.log("Suma: "+ resultadoSuma);
            console.log("Producto: "+ resultadoProducto);
            console.log("Media: "+ resultadoSuma/media);
            }
            
    }
    
    ejercicio4();