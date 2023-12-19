/**
 * 4. Realiza un programa que tenga 3 elementos <p> y al hacer salir el puntero del ratón 
sobre ellos desaparezcan (se oculten) y al hacer doble clic (los elimine del DOM). 
También deberá tener un botón “Reaparecer” que hará que aparezcan todos los 
elementos desaparecidos (pero no los eliminados).
 */

"use strict"
{
let ps =document.querySelector("#todo");




  

    let boton=document.createElement("button");
    boton.setAttribute("id", "boton1");
    boton.textContent="Mostrar todos";
    ps.appendChild(boton);
    let mostraTodos=document.querySelector("#boton1");

    
    
    for(let i=1;i<=3;i++){


        let p=document.createElement("p");
        p.setAttribute("style", "font-size: 30px; background-color: yellow; margin-right: 1100px; text-decoration: None; border:0px;");
        p.textContent="Parrafo "+i;
        p.onmouseout=function() {ocultarElemento(p)};
        p.ondblclick=function() {eliminarElemento(p)};
        ps.appendChild(p);
        
    
    }

    function ocultarElemento(elemento) {
          elemento.style.display = 'none';
      }

   
      function eliminarElemento(elemento) {
          elemento.remove();
      }

      mostraTodos.addEventListener("click", mostrar);

      function mostrar(){
        let p = document.querySelectorAll("p");
        p.forEach(function(p){
          p.style.display = 'block';

        });

      }
      

}