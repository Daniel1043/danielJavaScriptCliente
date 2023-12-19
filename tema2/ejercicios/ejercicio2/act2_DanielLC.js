/**
 * Realiza un programa que cree dinámicamente una tabla de 100x100. Cada elemento
de la tabla tendrá un número único, que empezará en 1 y se irá incrementando de
1 en 1.
Esta página además tendrá un botón que será “Calcular numero casi primos”. Este botón
hará que todas las celdas de la tabla que tengan números “Casi primos” se pongan con
un fondo amarillo.
Definimos aquí que es un “Número casi primo”:
● Número casi primo: es un número que solo es divisible por sí mismo, la unidad
y por un solo número que no sea ni la unidad ni si mismo. 
 */
"use strict"
{
let primos=document.querySelector("#idBoton");
let noPrimo=document.querySelector("#idBoton2");
let tabla=document.querySelector("#tablas");
let tr;
let td;
let constante;
let Noprimos=false;
let color=false;
let fila=10;
let columna=10;

    primos.addEventListener("click", coloVerdadero);
    noPrimo.addEventListener("click", noColor);


        function coloVerdadero(){
           color=true;
           eliminarTabla();
           crearTabla();
        }

        function noColor(){
            color=false;
            eliminarTabla();
            crearTabla();
         }


    function crearTabla() {
        constante=1;
        for(let i=0;i<fila;i++){

        tr=document.createElement("tr");
        tr.setAttribute("id", "trr");
        tr.textContent="";
        tabla.appendChild(tr);

            for(let j=0;j<columna;j++){
                
                for(let r=2;r<constante;r++){

                    if(constante%r==0 ){
                        Noprimos=true;
                    }

                }

                td=document.createElement("td");

                if(Noprimos==false && color==true){
                    td.textContent=constante;
                    td.style.backgroundColor = 'yellow'
                    tr.appendChild(td);
                }else{
                    td.textContent=constante;
                    tr.appendChild(td);
                }

                constante=constante+1;    
                Noprimos=false;
            }

        }
    }

      function eliminarTabla(){
        for(let i=0;i<columna;i++){
        tr = document.getElementById("trr");
        
            tr.remove();

        }

        
        console.log(tr);
        
       
      }

    console.log(color);
    crearTabla();

}