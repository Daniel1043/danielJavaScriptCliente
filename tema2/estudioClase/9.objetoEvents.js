"use strict"
{
    let miBoton5=document.querySelector("#idBoton5");
    miBoton5.addEventListener("click",function(evento){
        console.log(evento);
    });

    function mostrarMensaje(evento){
        console.log('El tipo de evento captura es:'+evento.type);
        if(evento.type=="keyup"){
            console.log("Codigo de la tecla pulsada: "+evento.code);
            console.log("Tecla pulsada: "+evento.key);
        }else if(evento.type=="click"){
            console.log("Se ha pulsado el boton en coordenadas "+ evento.clientX + " - "+evento.clientY);
            console.log("Se ha pulsada el boton: "+evento.button);
            console.log("Se ha pulsada : "+evento.detail + " veces");
            console.log("¿Estaba pulsada la telca del CTRL ? "+evento.ctrlKey);
        }else if(evento.type =="dbclick"){
            console.log("Doble click");
        }
    }

    function mostrarMensaje2(evento){
        if(evento.type=="dbclick"){
            console.log("mensaje 2");
        }
    }

    miBoton5.addEventListener("keyup", mostrarMensaje);
    miBoton5.addEventListener("click", mostrarMensaje);
    miBoton5.addEventListener("dbclick", mostrarMensaje);

    miBoton5.addEventListener("dbclick", mostrarMensaje2, {capture:true});
    
}