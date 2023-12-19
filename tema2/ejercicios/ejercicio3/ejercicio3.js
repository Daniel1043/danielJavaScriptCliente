/*
Realiza un programa que cree 100 elementos “checkbox” con números aleatorios.
Además, la página tendrá un botón “Marcar todos” y un botón “Desmarcar todos”,
con su correspondiente funcionalidad. 
*/ 
"use strict"
{
let checkboxes1 =document.querySelector("#todo");
let agrandar=document.querySelector("#idBoton");
let hacerPequeño=document.querySelector("#idBoton2");
let marcarAl=document.querySelector("#idBoton3");
let desmarcarAl=document.querySelector("#idBoton4");


    marcarAl.addEventListener("click", marcarTodos);
    desmarcarAl.addEventListener("click", desmarcarTodos);
    agrandar.addEventListener("click", agrandarCuadros);
    hacerPequeño.addEventListener("click", normalidadCuadros);


    function marcarTodos() {
        let checkboxes =document.getElementsByName("nCheck1");
        checkboxes.forEach(checkbox => {
          if(checkbox.checked ===false){
            console.log("Check"+checkbox.value+" marcado");
          }
          checkbox.checked = true;
        });
      }

      function desmarcarTodos() {
        let checkboxes =document.getElementsByName("nCheck1");
        checkboxes.forEach(checkbox => {
          if(checkbox.checked ===true){
            console.log("Check"+checkbox.value+" desmarcado");
          }
          checkbox.checked = false;

        });
      }

      function agrandarCuadros() {
        let checkboxes =document.getElementsByName("nCheck1");
        checkboxes.forEach(checkbox => {
            if(checkbox.value%2==0){
                checkbox.setAttribute("style", "width: 26px; height: 26px;");
            }
        });
      }

      function normalidadCuadros() {
        let checkboxes =document.getElementsByName("nCheck1");
        checkboxes.forEach(checkbox => {
            if(checkbox.value%2==0){
                checkbox.setAttribute("style", "width: auto; height: auto;");
            }
        });
      }
    
 

    for(let i=0;i<=100;i++){

        
        let p=document.createElement("p");
        p.textContent=" ";
        checkboxes1.appendChild(p);

        let labe=document.createElement("label");
        labe.setAttribute("for", "idCheck1");
        labe.textContent=i;
        checkboxes1.appendChild(labe);

        let inpu=document.createElement("input");
        inpu.setAttribute("type", "checkbox");
        inpu.setAttribute("name", "nCheck1");
        let numeroAleatro = Math.floor((Math.random()*(200-100))+100 ) ;
        inpu.setAttribute("value", numeroAleatro);
        inpu.textContent="";
        labe.appendChild(inpu);


        inpu.addEventListener("click", ()=>{
          if(inpu.checked ===true){
            console.log("Check"+inpu.value+" marcado");
          }
          if(inpu.checked ===false){
            console.log("Check"+inpu.value+" desmarcado");
          }

    
        });

        
    }


   
   
  

    
}
    