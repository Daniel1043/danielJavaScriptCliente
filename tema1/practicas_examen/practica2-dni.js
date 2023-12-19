//15. Indica si un NIF es válido o no.

{
    function dni(dnii){
        let letra = dnii.substring(9,10);
        let dni_nuevo = dnii.substring(0,9);
        console.log(letra);
        console.log(dni_nuevo);

    }
    dni("835913562T");

    function repetir(palabra){
        let rept= prompt("numero de veces q se repite")
      
        for(let i=rept;0<i;i--){
            let palt = rept.repeat(i);
            console.log(palt);
            var l = "hola"
        }
        console.log(l);
                let separa = palabra.split("").reverse().join("");
        console.log(separa);
    }
    repetir("ACE");

    
}