

{

    function casiPrimo(){

        let num = prompt("Dime un numero, te dire si es primo");
        let tablaPrimos= [];
        let primo=true;
        for(let i=2;i<num;i++){
            if(num%i==0){
                tablaPrimos.push(i);
                primo=false;
            }

        }

        if(primo==true){
            console.log("Es un numero primo")
        }

        if(tablaPrimos.length==1){
            console.log("Es un numero casi primo");
            console.log(tablaPrimos.toString());
        }else{
            if(tablaPrimos.length>1){
                console.log("No es un numero casi primo");
                console.log(tablaPrimos.toString());
    
            }
        }
       
    }

    casiPrimo();
}