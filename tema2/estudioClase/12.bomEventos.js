"use strict"
{
    let botonAbrir = document.getElementById("idAbrirVenta");
    let botonCerrar = document.getElementById("idCerrarVenta");
    let botonImprimir = document.getElementById("idImprimirVentana");
    let ventana;

    botonAbrir.addEventListener("click", (e) => ventana=window.open("https://iesmartinezm.es"));
    botonCerrar.addEventListener("click", (e) => ventana.close());
    botonImprimir.addEventListener("click", (e) => window.print());

    window.addEventListener("resize", (e)=>{
        console.clear();
        console.log(window.innerWidth);
        console.log(window.innerHeight);
        console.log(window.outerWidth);
        console.log(window.outerHeight);
    });

    window.addEventListener("scroll", (e)=>{
        console.clear();
        console.log("SCROLL");
        console.log(window.scrollX);
        console.log(window.scrollY);
    });

        /*
    window.addEventListener("load",(e)=>{
        console.clear();
        console.log("LOAD")
        console.log(window.screenX);
        console.log(window.screenY);
    });
        */

    window.addEventListener("DOMContentLoaded", (e)=>{
        console.clear();
        console.log("DOMContentLoaded");
        console.log(window.screenX);
        console.log(window.screenY);
    });

    
}