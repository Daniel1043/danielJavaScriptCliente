/**
 * 28. En un vector de cadenas, indicar:
a. La cadena más corta.
b. La cadena más larga.
c. La cadena con más letras ‘a’.
d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son.
 * 
 */


{
    function ejercicio28(cadena1, cadena2){
   
     
       let cadenaMasCorta= cadena1.reduce((acumulador,elemento)=>elemento.length<acumulador.length?elemento:acumulador,v[0]);
       let cadenaMasLarga= cadena1.reduce((acumulador,elemento)=>elemento.length>acumulador.length?elemento:acumulador,v[0]);

        let cantd1a=0;
        let cantd1b=0;
        for(let i=0;i<cadena1.length;i++){
             if(cadena1.find((element) => element == "a")){
                cantd1a++;
             }
             if(cadena1.find((element) => element == "b")){
                cantd1b++;
             }

        }
        let cantd2a=0;
        let cantd2b=0;
        for(let i=0;i<cadena2.length;i++){
             if(cadena2.find((element) => element == "a")){
                cantd2a++;
             }
             if(cadena1.find((element) => element == "b")){
                cantd2b++;
             }

        }
        
        if(cantd1a>cantd2a){
            console.log("En la cadena uno hay más a");

        }else{
            console.log("En la cadena dos hay más a");
        }

        if(cantd1b>cantd2b){
            console.log("En la cadena uno hay más b");

        }else{
            console.log("En la cadena dos hay más b");
        }

        let regExp = /+b+/g;
        let coincideExpresion = function(cadena, excpReg){
            return cadena.match(excpReg);
        };
        let arraResultado = v.filter(elemento => coincideExpresion(elemento,regExp));
        console.log(`Hay ${arraResultado.length} coincidencias encontradas en ${arraResultado.join(",")}´);
    }
    ejercicio28(["de","feo","rico","pobre","millonario","sordo"],["dedo","mano","pie","cabeza","pierna"]);
}


