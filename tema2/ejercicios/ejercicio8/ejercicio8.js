"use strict"
{



    document.addEventListener("dblclick", (e) => {

        let colorRadom1=Math.floor(Math.random()*256) ;
        let colorRadom2=Math.floor(Math.random()*256);
        let colorRadom3=Math.floor(Math.random()*256) ;

        document.body.style.backgroundColor="rgb("+colorRadom1+", "+colorRadom2+", "+colorRadom3+")";

        });
}