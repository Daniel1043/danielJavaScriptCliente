"use strict"

{
    let formulario = document.querySelector(".formulario");
    formulario.addEventListener("submit",function(evento){

        let nombre_apellido=document.querySelector(".nombreApellidos");
        let correo=document.querySelector(".correo");
        let fecha=document.querySelector(".fecha");
        let seleccion=document.querySelector("input[name='sexo']");
        let multipleEleccion = document.querySelector(".aficiones");
        let desplegable = document.querySelector(".ciudadesLista");
        let textoGrande = document.querySelector(".textarea");
        
        if(!not_Number(nombre_apellido.value) || !correo.value || !comprobarFecha(fecha.value) || !seleccion.checked
        || !multipleEleccion.checked || !desplegable.selectedIndex || !textoGrande.value){
            evento.preventDefault(); //evitar lo que se hace por defecto
            console.log("entra");   

            if(!not_Number(nombre_apellido.value)){
                mostrarMensaje("El nombre y apellido contiene un numero o no se ha introducido un nombre y apelldio",1);
            }

            if(!correo.value ){
                mostrarMensaje("No se ha introducido un correo",2);
            }

            if(!comprobarFecha(fecha.value)){
                mostrarMensaje("La fecha introducida es mayor a 2010 o no se ha introducido una fecha",3);
            }

            if(!seleccion.checked){
                mostrarMensaje("No se ha seleccionado ningun sexo",4);
            }

            if( !multipleEleccion.checked ){
                mostrarMensaje("No se ha seleccionado ninguna afición",5);
            }

            if( !desplegable.selectedIndex ){
                mostrarMensaje("No se ha seleccionado ninguna ciudad",6);
            }

            if( !textoGrande.value ){
                mostrarMensaje("No se ha escrito nada",7);
            }

        }else{
            alert("Se va a enviar el formulario");
        }

    });

    function not_Number(nom_apell){
        let noTiene=true;

        if(!nom_apell){
            noTiene=false;
        }

        for(let i=0;i<nom_apell.length;i++){
            if(nom_apell.charAt(i)==0 ||nom_apell.charAt(i)==1 ||nom_apell.charAt(i)==2 ||nom_apell.charAt(i)==3 ||nom_apell.charAt(i)==4 
            ||nom_apell.charAt(i)==5 ||nom_apell.charAt(i)==6 ||nom_apell.charAt(i)==7 ||nom_apell.charAt(i)==8 ||nom_apell.charAt(i)==9  ){
                noTiene=false;
            }
        }


        return noTiene;

    }

    
    function comprobarFecha(fechaPasas){
        let fechMayor=true;

        if(!fechaPasas){
            fechMayor=false;
        }

        const fechaIntroducida = new Date(fechaPasas);

        const fechaNoPasar= new Date("01/01/2010");

        if(fechaNoPasar<=fechaIntroducida){
            fechMayor=false;
        }

        return fechMayor;

    }

    function comprobarSeleccion(fechaPasas){
        let seleccion=false;

        let checkboxes =document.getElementsByName("nCheck1");
        checkboxes.forEach(checkbox => {
            if(checkbox.checked){
                seleccion=true;
            }
        });

       
        return fechMayor;

    }



    let nombreInferior = document.querySelector(".divNombre");
    let correoInferior = document.querySelector(".divCorreo");
    let fechaInferior = document.querySelector(".divFecha");
    let seleccionInferior = document.querySelector(".divRadio");
    let multipleEleccionInferior = document.querySelector(".divAficiones");
    let desplegableInferior = document.querySelector(".divCiudades");
    let textoGrandeInferior = document.querySelector(".divMensaje");

    function mostrarMensaje(texto,caso){
        let alerta=document.createElement("p");
        alerta.textContent=texto;
        alerta.style.color="red";
        alerta.setAttribute("class","error");

        switch (caso) {
            case 1:
                nombreInferior.appendChild(alerta);
              break;
            case 2:
                correoInferior.appendChild(alerta);
              break;
            case 3:
                fechaInferior.appendChild(alerta);
              break;
            case 4:
                seleccionInferior.appendChild(alerta);
              break;
            case 5:
                multipleEleccionInferior.appendChild(alerta);
              break;
            case 6:
                desplegableInferior.appendChild(alerta);
              break;
            case 7:
                textoGrandeInferior.appendChild(alerta);
              break;
            default:
              console.log("error");
          }

        setTimeout(()=>{
            alerta.remove();
        },5000);
    }

}