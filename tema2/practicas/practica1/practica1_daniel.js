"use strict"

{

    let crear=document.querySelector(".crearBotones");
    let reiniciar=document.querySelector(".reiniciar");


    let tablaBotones=[];
    let boton;

    crear.addEventListener("click", crearBotones);
    reiniciar.addEventListener("click", eliminarBotones);

    console.log(document.styleSheets);

    function crearBotones(){

        let numCrear=document.querySelector(".inputNBotones");

        for(let i=0;i<numCrear.value;i++){
            boton=document.createElement("button");
            let colorRadom1=Math.floor(Math.random()*256) ;
            let colorRadom2=Math.floor(Math.random()*256);
            let colorRadom3=Math.floor(Math.random()*256) ;
            boton.textContent="rgb("+colorRadom1+", "+colorRadom2+", "+colorRadom3+")";
            boton.style.backgroundColor="rgb("+colorRadom1+", "+colorRadom2+", "+colorRadom3+")";
            document.body.appendChild(boton);
            tablaBotones.push(boton);
        }
        

        for(let i=0;i<tablaBotones.length;i++){

            tablaBotones[i].onclick= function(){
                document.body.style.backgroundColor=tablaBotones[i].textContent;
    
             }
        
    
        }


    }
    
 
   


    function eliminarBotones(){


        for(let i=0;i<tablaBotones.length;i++){
            tablaBotones[i].remove();
        }
        document.body.style.backgroundColor="white";

        
    }


}