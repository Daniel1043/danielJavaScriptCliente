/**
 * 5. Realiza un programa que mediante eventos y el uso del objeto event, te muestre en todo
momento la posición actual del ratón en pantalla.
Para mostrarlo modificaremos de forma dinámica un elemento HTML (Ejemplo, un <p>) que
nos muestre la posición actual del ratón. 
 */

"use strict"
{
let divTodo =document.querySelector("#todo");



let p=document.createElement("p");
p.setAttribute("style", "font-size: 30px; background-color: red; margin-right: 1100px; text-decoration: None; border:0px;");

let p2=document.createElement("p");
p2.setAttribute("style", "font-size: 30px; background-color: red; margin-right: 1100px; text-decoration: None; border:0px;");

    document.addEventListener("mousemove", (e) => {

    p.textContent="X:"+e.clientX;
    divTodo.appendChild(p);


    p2.textContent="Y:"+e.clientY;
    divTodo.appendChild(p2);

    });
    
}