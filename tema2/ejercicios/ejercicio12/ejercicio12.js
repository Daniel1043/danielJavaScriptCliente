"use strict"

{
    let formulario = document.querySelector("#idForm1");
   
    formulario.addEventListener("submit",function(evento){
       
        let texto1=document.querySelector("#idText1");
        let texto2=document.querySelector("#idText2");
        console.log(texto1.value.length);
        console.log(texto2.value.length);

        if(!esAnagrama(texto1.value, texto2.value)){
            evento.preventDefault(); //evitar lo que se hace por defecto
            console.log("entra");   

        }else{
            alert("Se va a enviar el formulario");
        }

    });

    function esAnagrama(tx1, tx2){
        let valido=false;
     
        console.log("1");   
        console.log(tx1.length);   
        console.log(tx2.length);   

        tx1 = tx1.replace(/[^\w]/g, '').toLowerCase();
        tx2 = tx2.replace(/[^\w]/g, '').toLowerCase();

        if(tx1.length==tx2.length){



            let sortedPalabra1 = tx1.split('').sort().join('');
            let sortedPalabra2 = tx2.split('').sort().join('');
            
            console.log(sortedPalabra1);
            console.log(sortedPalabra2);

                if(sortedPalabra1==sortedPalabra2){
                    valido=true;
                    console.log("2"); 
                }
        }
            
        
        console.log(valido);   

        return valido;
    }
}