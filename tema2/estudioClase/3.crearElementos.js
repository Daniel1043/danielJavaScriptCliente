"use strict"

{

    console.log("\n----CREAR ELEMENTOS HTML -----");
    
    console.log("\n1.Crear un comentario"); // Node
    let comentario =  document.createComment("Este es el texto de un comentario");
    console.log(comentario);

    console.log("\n2.Crear un nodo de texto"); //Node
    let nodoTexto=document.createTextNode("texto que voy a añadir mas tarde");
    console.log(nodoTexto);

    console.log("\N3.Clonar un nodo"); // Node
    let otroNodoTexto = nodoTexto.cloneNode();
    console.log(otroNodoTexto);

    console.log("\N4.VER si un nodo esta conectado con el DOM"); // Node
    comentario.isConnected?console.log("\nSI"):console.log("\nNO");

    console.log("\n5.Crear distintos elementos HTML con createElement");
    let nuevoDiv = document.createElement("div");
    nuevoDiv.textContent= "Hola";
    console.log(nuevoDiv);
    console.log(nuevoDiv.textContent);
    let nuevoDiv2 = nuevoDiv.cloneNode(true); //cloneNode()= cloneNode(false)==> no copia el elemento
    nuevoDiv.textContent="Adios";
    console.log(nuevoDiv);
    console.log(nuevoDiv2);

    let nuevoImg = document.createElement("img");
    console.log(nuevoImg);

    let nuevoH1 = document.createElement("h1");
    console.log(nuevoH1);

    let nuevoH2 = document.createElement("h2");
    let nuevoTextoH2 = document.createTextNode("texto de H2"); //Node
    //nuevoH2.append(nuevoTextoH2);
    nuevoH2.appendChild(nuevoTextoH2); // es lo mismo
    console.log(nuevoH2);

}