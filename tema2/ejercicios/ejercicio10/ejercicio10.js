"use strict"

{
    let formulario = document.querySelector("#idForm1");
    
    formulario.addEventListener("submit",function(evento){
       
        let dni=document.querySelector("#idText1");
        
        if(!validaDNI(dni.value)){
            evento.preventDefault(); //evitar lo que se hace por defecto

            if(dni.value.length!=9){
                alert("El texto tiene que tener 9 caracteres");
            }
            if(!validaDNI(dni.value)){
                alert("El dni debe tener un formato incorrecto");
            }

        }else{
            alert("Se va a enviar el formulario");
        }
        
    });

    function validaDNI(valorDni){
        let valido=false;
        let letrasValidas=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']; //Crearemos un objeto con todas las letra posibles del DNI ordenadas
        let letra="";   
        let numerosDni;

            numerosDni=valorDni.slice(0,8); //Separamos los numeros del DNI de la letra, aqui sacamos los numeros
            letra=valorDni.slice(8,9);     //Sacaremos la letra del DNI
        
            if(letrasValidas[numerosDni%23]==letra){ //La letra del dni se pueda sacar dividiendo los numeros del DNi por 23, esto lo compararemos con las letras validas y su posición
               valido=true;

            }

        
        console.log(valido);   

        return valido;
    }
}