
"use strict"
{
    //Mediante esta función elegiremos el modo de juego y crearemos un arrray, tras elegir nos llevara a la funcion correspondiente
    function inicioJuego(){
        let eleccion = prompt("Escribe 1 si quieres jugar un 1vs1 contra tu amigo, escribe 2 si quieres jugar contra la maquina");
        
        let tresRaForma = Array.from(Array(3), ()=>new Array(3));

        if(eleccion==1){
            jugarUnoContraOtro(tresRaForma);
        }else if(eleccion==2){
            jugarMaquina(tresRaForma);
        }else{
            console.log("No ha introducido el numero correcto")
        }
        
        
        }


    function jugarUnoContraOtro(tresRaForma){
    
    let fila=0;
    let columna=0;
    let victoria=false;
    let ganador="";

    for(let i=0;i<3;i++){
        for(let j=0; j<3;j++){
            tresRaForma[i][j]="-";
        }
    }

    console.log("El jugador uno sera las X y el jugador dos las O")

            while(victoria==false){

                

                    fila= prompt("La fila en la que pondra su X del 0 al 2");
                    columna= prompt("La columna en la que pondra su X del 0 al 2");

                    while(   tresRaForma[fila][columna]=="X" ||    tresRaForma[fila][columna]=="O"){
                        console.log("La posicion esta ocupada escribe otras filas y columnas");

                        fila= prompt("La fila en la que pondra su X del 0 al 2");
                        columna= prompt("La columna en la que pondra su X del 0 al 2");
    
                    }

                
               

              
                tresRaForma[fila][columna]="X";

               
                        if( tresRaForma[0][0]==tresRaForma[0][1] && tresRaForma[0][0]==tresRaForma[0][2] && tresRaForma[0][0]=="X"||
                        tresRaForma[1][0]==tresRaForma[1][1] && tresRaForma[1][0]==tresRaForma[1][2] && tresRaForma[1][0]=="X" ||
                        tresRaForma[2][0]==tresRaForma[2][1] && tresRaForma[2][0]==tresRaForma[2][2] && tresRaForma[2][0]=="X"
                        || tresRaForma[0][0]==tresRaForma[1][1] && tresRaForma[0][0]==tresRaForma[2][2] && tresRaForma[0][0]=="X"
                        || tresRaForma[0][0]==tresRaForma[1][0]  &&  tresRaForma[0][0]== tresRaForma[2][0] &&  tresRaForma[0][0]=="X"
                        ||  tresRaForma[0][1]== tresRaForma[1][1] &&  tresRaForma[0][1]== tresRaForma[2][1] &&  tresRaForma[0][1]=="X"
                        || tresRaForma[0][2]== tresRaForma[1][2] &&  tresRaForma[0][2]== tresRaForma[2][2] &&  tresRaForma[0][2]=="X"){
                            victoria=true;
                            ganador="Jugador1"
                            break;
                        }

                console.log(tresRaForma)


             
                    fila= prompt("La fila en la que pondra su O del 0 al 2");
                    columna= prompt("La columna en la que pondra su o del 0 al 2");

                    while(   tresRaForma[fila][columna]=="X" ||    tresRaForma[fila][columna]=="O"){
                        console.log("La posicion esta ocupada escribe otras filas y columnas");

                        fila= prompt("La fila en la que pondra su O del 0 al 2");
                    columna= prompt("La columna en la que pondra su o del 0 al 2");
    
                    }



              
                tresRaForma[fila][columna]="O";
                
                
    

                    if(tresRaForma[0][0]==tresRaForma[0][1] && tresRaForma[0][0]==tresRaForma[0][2] && tresRaForma[0][0]=="O"||
                    tresRaForma[1][0]==tresRaForma[1][1] && tresRaForma[1][0]==tresRaForma[1][2] && tresRaForma[1][0]=="O" ||
                    tresRaForma[2][0]==tresRaForma[2][1] && tresRaForma[2][0]==tresRaForma[2][2] && tresRaForma[2][0]=="O"
                    || tresRaForma[0][0]==tresRaForma[1][1] && tresRaForma[0][0]==tresRaForma[2][2] && tresRaForma[0][0]=="O"
                    || tresRaForma[0][0]==tresRaForma[1][0]  &&  tresRaForma[0][0]== tresRaForma[2][0] &&  tresRaForma[0][0]=="O"
                    ||  tresRaForma[0][1]== tresRaForma[1][1] &&  tresRaForma[0][1]== tresRaForma[2][1] &&  tresRaForma[0][1]=="O"
                    || tresRaForma[0][2]== tresRaForma[1][2] &&  tresRaForma[0][2]== tresRaForma[2][2] &&  tresRaForma[0][2]=="O" 
                    ){
                            victoria=true;
                            ganador="Jugador2"
                    }


           
        }
        console.log("El ganador es el jugador "+ganador);
    }


    function jugarMaquina(tresRaForma){
    
        let fila=0;
        let columna=0;
        let victoria=false;
        let ganador="";
        let diferente=false;
    
        for(let i=0;i<3;i++){
            for(let j=0; j<3;j++){
                tresRaForma[i][j]="-";
            }
        }
    
        console.log("El jugador uno sera las X y la maquina las O")
    
                while(victoria==false){
                    
                  
                        fila= prompt("La fila en la que pondra su X del 0 al 2");
                        columna= prompt("La columna en la que pondra su X del 0 al 2");

                        while(   tresRaForma[fila][columna]=="X" ||    tresRaForma[fila][columna]=="O"){
                            console.log("La posicion esta ocupada escribe otras filas y columnas");
    
                            fila= prompt("La fila en la que pondra su X del 0 al 2");
                            columna= prompt("La columna en la que pondra su X del 0 al 2");
        
                        }

                          tresRaForma[fila][columna]="X";


    
                   
                            if( tresRaForma[0][0]==tresRaForma[0][1] && tresRaForma[0][0]==tresRaForma[0][2] && tresRaForma[0][0]=="X"||
                            tresRaForma[1][0]==tresRaForma[1][1] && tresRaForma[1][0]==tresRaForma[1][2] && tresRaForma[1][0]=="X" ||
                            tresRaForma[2][0]==tresRaForma[2][1] && tresRaForma[2][0]==tresRaForma[2][2] && tresRaForma[2][0]=="X"
                            || tresRaForma[0][0]==tresRaForma[1][1] && tresRaForma[0][0]==tresRaForma[2][2] && tresRaForma[0][0]=="X"
                            || tresRaForma[0][0]==tresRaForma[1][0]  &&  tresRaForma[0][0]== tresRaForma[2][0] &&  tresRaForma[0][0]=="X"
                            ||  tresRaForma[0][1]== tresRaForma[1][1] &&  tresRaForma[0][1]== tresRaForma[2][1] &&  tresRaForma[0][1]=="X"
                            || tresRaForma[0][2]== tresRaForma[1][2] &&  tresRaForma[0][2]== tresRaForma[2][2] &&  tresRaForma[0][2]=="X"){
                                victoria=true;
                                ganador="Jugador1"
                                break;
                            }
    
                    console.log(tresRaForma)
    
    
                   
                        fila= (Math.random()*3)+1 ;
                        columna=(Math.random()*3)+1 ;

                        while(   tresRaForma[fila][columna]=="X" ||    tresRaForma[fila][columna]=="O"){
                            console.log("La posicion esta ocupada escribe otras filas y columnas");
    
                                fila= (Math.random()*3)+1 ;
                                 columna=(Math.random()*3)+1 ;
        
                        }
                    tresRaForma[fila][columna]="O";
                    
                    
        
    
                        if(tresRaForma[0][0]==tresRaForma[0][1] && tresRaForma[0][0]==tresRaForma[0][2] && tresRaForma[0][0]=="O"||
                        tresRaForma[1][0]==tresRaForma[1][1] && tresRaForma[1][0]==tresRaForma[1][2] && tresRaForma[1][0]=="O" ||
                        tresRaForma[2][0]==tresRaForma[2][1] && tresRaForma[2][0]==tresRaForma[2][2] && tresRaForma[2][0]=="O"
                        || tresRaForma[0][0]==tresRaForma[1][1] && tresRaForma[0][0]==tresRaForma[2][2] && tresRaForma[0][0]=="O"
                        || tresRaForma[0][0]==tresRaForma[1][0]  &&  tresRaForma[0][0]== tresRaForma[2][0] &&  tresRaForma[0][0]=="O"
                        ||  tresRaForma[0][1]== tresRaForma[1][1] &&  tresRaForma[0][1]== tresRaForma[2][1] &&  tresRaForma[0][1]=="O"
                        || tresRaForma[0][2]== tresRaForma[1][2] &&  tresRaForma[0][2]== tresRaForma[2][2] &&  tresRaForma[0][2]=="O" 
                        ){
                                victoria=true;
                                ganador="Maquina"
                        }
    
    
               
            }
            console.log("El ganador es el jugador "+ganador);
        }
    
   
inicioJuego();

}