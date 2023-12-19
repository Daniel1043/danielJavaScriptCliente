/**
 * 3. Dada una hora en horas, minutos y segundos,
 *  indicar qué hora será pasado un segundo.
 * 
 */

{
    function ejercicio3(){
        let hora= prompt("Dime una hora");
        let minutos= prompt("Dime unos minutos ");
        let segundos= prompt("Dime unos segundos");
       
        while(segundos>=59 || minutos>=59 ){

                if (segundos >= 59){
                    segundos=segundos-59;
                        if(minutos>=59){
                            
                            minutos=minutos-59;
                            if(hora>=23){
                              hora=0;
                            }else{
                                hora++;
                            }
                        }else{
                            minutos++;
                        }
                }else{
                    if(minutos>=59){
                        hora++;
                        minutos=minutos-59;
                    }else{
                        minutos++;
                    }
                }
        }

        if(segundo+1>=59){
            if(minutos>=59){
                hora++;
                minutos=minutos-59;
            }else{
                minutos++;
            }
        }else{
            segundos++;
        }
    console.log("Horas:"+hora+ " minutos:"+minutos+ " segundos:"+segundos);

    }
    
}

ejercicio3();