/**
 * 1. Realiza un programa que cuando se pulse un botón con el texto “Nuevo número”,
añada un elemento con un número aleatorio a una lista desordenada (elemento UL). 
 */
"use strict"
{
    let lista=document.querySelector("#luu");
    let miBoton=document.querySelector("#idBoton");
    let eliminar=document.querySelector("#idBoton2");

    let lisDesordenada;
    let numeroAleatro;
    
        miBoton.addEventListener("click", mostrarMensaje);
        eliminar.addEventListener("click", eliminarElementoLista);
    

    function mostrarMensaje(evento){
         if(evento.type=="click"){
         numeroAleatro = Math.floor((Math.random()*100)+1 ) ;
         lisDesordenada=document.createElement("li");
         lisDesordenada.textContent=numeroAleatro;
         console.log(lisDesordenada);
         lista.appendChild(lisDesordenada);
        }
    }

    function eliminarElementoLista(evento){
        let list = lista.lastElementChild;
         if(evento.type=="click"){

            try {
                lista.removeChild(list); 

            } catch (error) {
                console.log("No hay elemento");

            }
            
             
         
           
        }
    }

   
}