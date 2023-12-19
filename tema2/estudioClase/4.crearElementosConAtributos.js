"use strict"
{
    console.log("ATRIBUTOS DE LOS ELEMENTOS HTML");
    console.log("\n\t1.U div nuevo");
    let nuevoDiv = document.createElement("div");
    nuevoDiv.style = "color:red";
    nuevoDiv.id="id1";
    nuevoDiv.className="cDiv1";

    console.log(nuevoDiv);

    console.log("\n\t2.Un parrafo nuevo");
    let nuevoParrafo = document.createElement("p");


    
    nuevoParrafo.setAttribute("name", "nParrafo1");
    nuevoParrafo.setAttribute("id","idParrafo1");
    nuevoParrafo.setAttribute("class", "cParrafo1");
    nuevoParrafo.hasAttribute("name")?console.log("SI"):console.log("NO");
    nuevoParrafo.hasAttribute("kk")?console.log("SI"):console.log("NO");
    console.log(nuevoParrafo);

    nuevoParrafo.hasAttribute()?console.log("SI"):console.log("NO");
    let nombreAtributos=nuevoParrafo.getAttributeNames();
    console.log(nombreAtributos);

    nuevoParrafo.setAttribute("style","color:orange");
    nombreAtributos=nuevoParrafo.getAttributeNames();
    console.log(nombreAtributos);
    nuevoParrafo.removeAttribute("style");
    nombresAtributos = nuevoParrafo.getAttributeNames();
    console.log(nombresAtributos);

    let textoParrafo=document.createTextNode("el texto del nuevo parrafo");
    nuevoParrafo.append(textoParrafo);
    console.log(nuevoParrafo);

    console.log("estao conectado el nuevo parrafo al body?");
    nuevoParrafo.isConnected?console.log("SI"):console.log("NO");
    nuevoDiv.isConnected?console.log("SI"):console.log("NO");

    document.body.append(nuevoDiv);
    nuevoDiv.append(nuevoParrafo);
    nuevoDiv.isConnected?console.log("SI"):console.log("NO");



}

/**
 * setAttribute (attr, valor): añade o cambia el valor del atributo
 * hasAttribute (attr) : ture/false indicando si tiene o no el atributo
 * hasAttributes (): true/false indicando si tiene o no atributos
 * getAttributeNames(): [] de string con los nombres de los atributos
 * getAttribute (attr): devuelve string con el valor del atributo
 * removeAttribute(attr): elimina el atributo del elemento
 * 
 * getAttributeNode(attr):devuele un node con el valor del atributo
 * removeAttributeNode (attr):devuelve el node que ha eliminado
 * setAttribueNode (attr, valor): devuele el node que ha añadido
 * 
 */
