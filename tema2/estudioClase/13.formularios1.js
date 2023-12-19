"use strict"
{

    let formularioCompleto= document.getElementById("idForm1");
    console.log(formularioCompleto);
    console.log(formularioCompleto.nTexto.placeholder);
    console.log(formularioCompleto.nUrl.value);

    let inputText1 = document.getElementById("idTexto1");
    console.log(inputText1.name);
    console.log(inputText1.value);

    inputText1.oninput = function (e) {
        console.log(e.data);
        console.log(e.target.value);
    }

    inputText1.onchange = function (e) {
        console.log(e.target.value);
    }

    let inputTexArea1 = document.getElementById("#idTextArea1");
    console.log(inputText1.name);
    console.log(inputText1.value);
   
    
    console.log("Acceder a un textArea y capturar sus eventos");
    let textArea1 = document.getElementsByName("nTextArea1");
    console.log(textArea1[0].value);

    console.log("Acceder a radio button")
    let radioButton1= document.getElementsByName("nrButton1");
    radioButton1.forEach(elem =>{
        console.log(elem);
        console.log(elem.value);
    });
    for(let elem of radioButton1){
        if(elem.checked ===true){
            console.log("La opcion marcada es: "+ elem.value);
        }
    }
    for(let elem of radioButton1){
        elem.addEventListener("change",function(e){
            if(elem.checked === true){
                console.log( elem.value);
            }
        });
    }


    let checkboxes1 =document.getElementsByName("nCheck1");
    checkboxes1.forEach(elem =>{
        console.log(elem);
        console.log(elem.value);
    });
    
    for(let elem of checkboxes1){
        if(elem.checked ===true){
            console.log("La opcion marcada es: "+ elem.value);
        }
    }

    for(let elem of checkboxes1){
        elem.addEventListener("change", function(e){
            if(elem.checked === true){
                console.log("Me como un "+ elem.value);
            }else{
                console.log("No me como un "+ elem.value);
            }
        });
    }


    let seleccion =document.querySelector("#idLenguaje");
    
    for(let elem of seleccion){
        console.log(elem.text+" "+ elem.value);
        if(elem.selected ===true){
            console.log("La opcion marcada es: "+ seleccion.selectedIndex);
        }
    }

    seleccion.addEventListener("change",function(e){
        console.log("Indice seleccionado es "+seleccion.selectedIndex);
        console.log("El valor del elementoo seleccionado es: "+seleccion.value);
        console.log("El valor del elementoo seleccionado es: "+seleccion.options[seleccion.selectedIndex].text);

    });
}