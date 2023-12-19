
"use strict"
{
function piedraPapelTijeras(){
    let jugador1="";
    let jugador2="";
    let puntosj1=0;
    let puntosj2=0;
    let rondas=0;
    let empates=0;

  
    
        while(puntosj1 < 5 && puntosj2<5){

        console.log("Escribe piedra papel o tijeras");

        jugador1 = prompt("Dime piedra, papel o tijeras, jugador uno");
        jugador2 = prompt("Dime piedra, papel tijeras, jugador dos ");


            if(jugador1 == jugador2){
                rondas=rondas+1;
                empates++;

            }else{
                if(jugador1=="tijeras" && jugador2=="piedra" || jugador1=="piedra" && jugador2=="papel"  || jugador1=="papel" && jugador2=="tijeras" ){
                    puntosj2++;
                    rondas=rondas+1;
                }
                if(jugador2=="tijeras" && jugador1=="piedra" || jugador2=="piedra" && jugador1=="papel"  || jugador2=="papel" && jugador1=="tijeras" ){
                    puntosj1++;
                    rondas=rondas+1;
                }

                
            }

        console.log("Numero de rondas: "+rondas);
        console.log("Puntos jugador uno: "+puntosj1);
        console.log("Puntos jugador dos: "+puntosj2);
        console.log("Empates: "+empates);
        console.log("");


        }
        console.log("Toal de rondas: "+rondas);
        console.log("Total de puntos del jugador uno: "+puntosj1);
        console.log("Total de puntos del jugador dos: "+puntosj2);
        console.log("Total de empates en la partida: "+empates);
        if(puntosj1>puntosj2){
            console.log("El jugador uno ha ganado la partida");
        }else{
            console.log("El jugador dos ha ganado la partida");

        }

    }

   
piedraPapelTijeras();

}