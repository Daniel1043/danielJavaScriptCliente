/**
 * 27. En un vector de números, indicar:
a. El número de elementos del vector.
b. Cuántos son pares y cuántos impares y cuáles son.
c. La suma de todos los números negativos.
d. El producto de todos los números positivos.
e. Cuántos son primos y cuáles son.
f. Los números que ocupan las posiciones pares del vector.
g. El número mayor.
h. El número menor.
i. La media de todos los números, los números que están por encima y los que están por
debajo.
j. El vector ordenado de mayor a menos y viceversa.
k. Buscar un valor introducido por el usuario e indicar si existe o no.

 */

{
    function ejercicio27(cadenaNum){
        
        //a. El número de elementos del vector.
        console.log(cadenaNum.length);
       
        //b. Cuántos son pares y cuántos impares y cuáles son.
        for(let i=0;i<cadenaNum.length;i++){
            if(cadenaNum[i]%2==0){
                console.log("Es par " +cadenaNum[i]);
            }else{
                console.log("Es impar " +cadenaNum[i]);
            }
        }

        //c. La suma de todos los números negativos.
        let totalNegativos=0;
        for(let i=0;i<cadenaNum.length;i++){
            if(cadenaNum[i]<0){
                totalNegativos=cadenaNum[i]+totalNegativos;
            }
        }
        console.log(totalNegativos);
        
        //d. El producto de todos los números positivos.
        let productoPositivo=1;
        for(let i=0;i<cadenaNum.length;i++){
            if(cadenaNum[i]>0){
                productoPositivo=cadenaNum[i]*productoPositivo;
            }
        }
        console.log(productoPositivo);
        
        //e. Cuántos son primos y cuáles son.
        let totalPrimos=0;
        let primo=true;
        for(let i=0;i<cadenaNum.length;i++){

            if(cadenaNum[i]<=1){
                primo=false;
            }

            for(let j=2;j<cadenaNum[i]-1;j++){
                
                if(cadenaNum[i]%j==0 ){
                   primo=false;
                }
              
            }
            
           if(primo==true){
                console.log("Es primo " +cadenaNum[i]);
                totalPrimos++;
           }
           primo=true;
        }
        console.log("Hay un total de "+totalPrimos+" numeros primos")
        

        //f. Los números que ocupan las posiciones pares del vector.
        for(let i=0;i<cadenaNum.length;i=i+2){
            console.log("Ocupa una posicion par del vector "+cadenaNum[i]);
        }

        //g. El número mayor.
        /**
         * h. El número menor.
            i. La media de todos los números, los números que están por encima y los que están por
            debajo.
         */
        let numeroMayor=cadenaNum[1];
        let numerMenor=cadenaNum[1];
        let mediaNumeros=0;
        for(let i=0;i<cadenaNum.length;i++){
           if(numeroMayor<cadenaNum[i]){
            numeroMayor=cadenaNum[i];
           }
           if(numerMenor>cadenaNum[i]){
            numerMenor=cadenaNum[i];
           }
           mediaNumeros=cadenaNum[i]+mediaNumeros;
        }
        console.log("Numero mayor es "+numeroMayor);
        console.log("Numero menor es "+numerMenor);
        console.log("La media de los numeros  es "+mediaNumeros/cadenaNum.length);

        
        //j. El vector ordenado de mayor a menos y viceversa.
        console.log(cadenaNum.sort((a,b)=>a-b));

        cadenaNum.reverse();
        console.log(cadenaNum);

        //k. Buscar un valor introducido por el usuario e indicar si existe o no.
        cadenaNum.push(5);
        console.log(cadenaNum);
        const found = cadenaNum.find((element) => element == 5);
        console.log(found);
    }

    ejercicio27([123,63,-72,31,-21]);
}