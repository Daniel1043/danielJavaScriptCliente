"use strict"
{

    let a="Hola";
    let b=a;
    console.log(a);
    console.log(b);
    a="Adios";
    console.log(a);
    console.log(b);

    let v1=["Hola"];
    let v2 = v1;
    v1.push("adios");
    console.log(v1);
    console.log(v2);

    let v3 = ["hola"];
    let v4 = [...v3];
    v3.push("adios");
    console.log("v3: "+v3);
    console.log("v4: "+ v4);

    let persona={
         nombre:"pepe", 
         edad: 64,
         ciudad: "Cordoba"
    };
}