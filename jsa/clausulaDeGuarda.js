function f(){ //te dice si el numero es CERO menos que cero o par e impar
    let n=prompt("Funcion f:introducie un numero:",0);
    let res="";
    if (n==0){
        res="CERO";
    }else{
        if(n<0){
            res="Menos que cero";
        }else{
            if(m%2==0){
                res= "PAR";

            }else{
                res="IMPAR";
            }
        }
    }
    return res;
}

function f2(){
    let n = prompt("Funcion f2 (con clausalas de guarda): introduce un numero",0);
    if(n==0){
        return("CERO");
    }
    if(n<0){
        return("MENOR QUE CERO");
    }
    if(n%2==0){
        return "PAR";
    }
    return "Impar";
}

console.log(f());
console.log(f2());