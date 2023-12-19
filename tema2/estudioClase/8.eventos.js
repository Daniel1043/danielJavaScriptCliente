"use strict"

function saludar3(){
    alert("Saludar boton3");
}



{
 let miBoton4 =document.querySelector('#idBoton4');
 miBoton4.onclick= function(){
    alert("Saludar boton 4");
    alert("Saludar boton 4.1");
 }
 //miBoton4.onclick= function(){
 //   alert("Saludar boton 4.1");
 //}

 let miBoton5 = document.querySelector('#idBoton5');
 miBoton5.addEventListener("click",function(){
    alert("Saludar boton 5");
 })

}