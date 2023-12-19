"use strict"
{




    let seleccion =document.querySelector("#selector");
    let seleccion2 =document.querySelector("#selector2");


    let opcion1, opcion2, opcion3;


    opcion1=document.createElement("option");

    opcion2=document.createElement("option");

    opcion3=document.createElement("option");
    
    if(seleccion.selectedIndex==0){
        console.log("No hay ninguno selecionado en el selecto1");

    }
     

    seleccion.addEventListener("change",function(e){


        if(seleccion2.selectedIndex==0){
            console.log("No hay ninguno selecionado en el selector2");
    
        }

        switch (seleccion.selectedIndex) {
            case 1:


                opcion1.textContent="Alicante Capital";
                seleccion2.appendChild(opcion1);

                opcion2.textContent="Elche";
                seleccion2.appendChild(opcion2);

                opcion3.textContent="Orihuela";
                seleccion2.appendChild(opcion3);
        
               break;
            case 2:

                
                opcion1.textContent="Castellon Capital";
                seleccion2.appendChild(opcion1);

                opcion2.textContent="Oroposa";
                seleccion2.appendChild(opcion2);

                opcion3.textContent="Vinaroz";
                seleccion2.appendChild(opcion3);
        
              break;
            case 3:

                opcion1.textContent="Valencia Capital";
                seleccion2.appendChild(opcion1);

                opcion2.textContent="Torrent";
                seleccion2.appendChild(opcion2);

                opcion3.textContent="Mislata";
                opcion3.setAttribute("selected","True");
                seleccion2.appendChild(opcion3);

              break;
            default:
                console.log("Error")
              break;
          }

        
      
    });

    

    let formulario = document.querySelector("#idForm1");


   
    formulario.addEventListener("submit",function(evento){
       

        if(seleccion2.selectedIndex==0 || seleccion.selectedIndex==0){
            evento.preventDefault(); //evitar lo que se hace por defecto
            if( seleccion.selectedIndex==0){
                console.log("No se ha seleccionadao ninguna casilla de la seleccion 1");   
            }

            if( seleccion2.selectedIndex==0){
                console.log("No se ha seleccionadao ninguna casilla de la seleccion 2");   
            }

          
        }else{
            alert("Se va a enviar el formulario");
        }

    });

   

}