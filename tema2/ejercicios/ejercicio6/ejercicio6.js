/**
 * 
 * 6. Realiza un programa con dos botones “Comenzar Saludos” y “Parar Saludos”. Al hacer
click en “Comenzar Saludos”, lance un setInterval que cada 5 segundos muestra un
“alert” con “Hola”. El botón “Parar Saludos” parará esa secuencia
 */

"use strict"
{
let divTodo =document.querySelector("#todo");



  

    let boton=document.createElement("button");
    boton.setAttribute("id", "boton1");
    boton.textContent="Comenzar saludos";
    divTodo.appendChild(boton);

    boton=document.createElement("button");
    boton.setAttribute("id", "boton2");
    boton.textContent="Parar saludo";
    divTodo.appendChild(boton);

    let iniciar=document.querySelector("#boton1");
    let terminar=document.querySelector("#boton2");

  
    iniciar.addEventListener("click", iniciarSaludo);
    terminar.addEventListener("click", eliminarSaludos);

    let intervalo;
    function iniciarSaludo(){
             intervalo= setInterval(() => {
                alert("Hola");
                }, 5000);
    }

    function eliminarSaludos(){

        clearInterval(intervalo);

      

    }

}