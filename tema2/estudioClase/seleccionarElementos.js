"use strict"

{
    
    console.log("1.Selecciono todas las listas no ordenadas con getElementsByTag(\"ul\")");
    let listas =document.getElementsByTagName("ul");
    console.log(listas)
    for(let element of listas){
        console.log(element);
        console.log(element.textContent);
    }

    console.log("Sleeciciona todas las listas no ordenadas con getElementsByClassName()")
    listas= document.getElementsByClassName("cListaVehiculos");
    for(let element of listas){
        console.log(element);
        console.log(element.textContent);
    }

    console.log("Selecciona todas las listas no ordenadas con getElementsByName ")
    listas=document.getElementsByName("nLista");
    console.log(listas)
    for(let element of listas){
        console.log(element);
        console.log(element.textContent);
    }

    console.log("Selecciono una lista con getElementById()")
    let elementoById = document.getElementById("idCiclomotores");
    console.log(elementoById);
    console.log(elementoById.textContent);

    console.log("5. Selecciono una lista con querySelector()");
    let listaCoches = document.querySelector("#idCoches"); // # --> es un id
    console.log(listaCoches);
    console.log(listaCoches.textContent);

    console.log("6. Selecciono una lista con querySelector()");
    let listaPersonajes = document.querySelector(".cListaPersonajes"); // . --> es un class
    console.log(listaPersonajes);
    console.log(listaPersonajes.textContent);

    console.log("7. Selecciono un parrafo con querySelector");
    let parrafo = document.querySelector("p"); // selecciona el primer parrafo
    console.log(parrafo);

    
    console.log("8. Selecciono todas las listas con  con querySelectorAll");
    let todasListas = document.querySelectorAll("ul"); //NodeList 
    todasListas.forEach(elemeto => console.log(elemeto));
    for(let i=0;i<todasListas.length; i++){
        console.log(todasListas[i]);
        console.log(todasListas[i].textContent);
    }

    listas = document.querySelectorAll('[name="nLista"]'); //Para buscar elementos por name
    listas.forEach(elemeto => console.log(elemeto));

    listas=document.querySelectorAll(".cListaVehiculos");
    listas.forEach(elemeto => console.log(elemeto));

    let cabeceras = document.querySelectorAll("h2");
    cabeceras.forEach(elemeto => console.log(elemeto));

}   