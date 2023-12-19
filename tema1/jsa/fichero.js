let miNumero=100;

//iterar sobre un array

let vector=[1,2,"A","F",-1,2.4];

console.log("\n\tIterar Sobre un bucle for: ");
for(let i=0; i<vector.length;i++){
    console.log(vector[i]);
}

console.log("\n\tIterar con un foreach: ");
vector.forEach(elem=> console.log(elem));
vector.forEach((elem,indice)=>console.log(elem+ " ocupa la posicion "+indice));

console.log("\n\tIterar con map : ");
vector.map(elem => console.log(elem));
let vector2=vector.map(elem => `${elem}`);
console.log(vector2);

console.log("\nIterar con for of: ");
for(let u of users){
    console.log(u);
}
for(let u of users){
    console.log(u.edad);
}
for(let n of numeros){
    console.log(n);
}


let users = [
    {nombre: Juan, edad: 34},
    {nombre: Pedro, edad: 23},
    {nombre: Paco, edad: 54},
];

let nombres = users.map( elem=> elem.nombre);
console.log(nombres);

numeros =[1,2,3,4,5,6,7,8,9,10];
let numeroPorDos = numeros.map(elem => elem*2);
console.log(numeroPorDos);

const elementos=["fuego","aire","agua"];


//FINDINDEX: devuelve la posicion del 1 elemento que cumpla la condicion
let posicion = usuarios.findIndex(elem=>elem.edad=20);
console.log("encontrar en la posicion "+ posicion);

//CONCAT: concatenar arrays 
const array1=["a","b","c"];
const array2=["d","e","f"];
const arra3 = array1.concat(array2);
console.log(arra3);

//REDUCE (acumulador, valorActual)


//some:devuelve true/false, busca si al menos 1 elemento cumple la condicion
let existe = usuarios.some((elem)=>elem.edad==10);
existe?console.log("lo ha encontrado"):console.log("no lo ha encontrado");


//find
let usuariosEncontrados = usuarios.find(elem => elem.edad=20);
console.log(usuariosEncontrados);

//SLice(inicio,[final]) extrae elementos desde el inicio hasta el final
let nombre=["Rita","Manuel","Miguel","Ana"];
let nombresMasculinos = nombres.slice(1,3);
console.log(nombresMasculinos);

//Filter 
const usuarios=[
    {nombre: "juan",edad:34},
    {nombre:"Antonio",edad:20}
];


//shift devuelve el primer elemento del array y lo elimina
let primerElemento = elementos.shift();
console.log(primerElemento);

//Reverse
console.log("Reversa" + arrayNumeros.reverse());

//sort ordenar los elementos
let numeros=[100,5,15,1,99];
console.log(numeros.sort());

console.log(numeros.sort((a,b) => a-b));

//ejemplo de como ir eliminando partes de un array
for(let i=elementos.length; i>0; i--){
    ultimoElemento= elementos.pop();
    console.log(ultimoElemento);
}


//añadir un elemento al final
elementos.push("tormenta");
console.log(elementos);

//devuelve el ultimo elemento del array y lo elimina
let ultimoElemento = elementos.pop ();
console.log("POP"+ ultimoElemento);

const sNumeros="UNO,DOS,TRES,CUATRO";
const arrayNumeros=sNumeros.slpit(",");
console.log(arrayNumeros);

let miArray = [];
miArray[0]=10;
miArray[1]="Martin";
let miArray2=new Array();



const producto = {
    nombrePorducto:"reloj",
    tipo:"bolsillo",
    tamaño:"grande"
};

const productoCompleto ={...producto, ...persona};

let personaCompleta={
    nombre:"Juan",
    edad: 30,
    ciudad="cordoba",
    pasatiempos:["salir de fiesta", "ir de botellona"],
    saludar(){
        console.log("hollaaaa");
    }
};

let animal={
    tipo="gato",
    patas:4,
    bigotes:true,
    dimensiones:{
        alto:50,
        ancho:30,
        largo:80
    }
};

let persona={
    nombre:"pepe",
    edad: 30
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);

/**
 *     <script src="jsa\clausulaDeGuarda.js"></script>
 *       <script src="jsa\tryCatch.js"></script>
 */
{

    const r5=/\b([a-z]{3})\b(gi);
    const str="Hola a todos amigos. Esto es una prueba que permitira ver que"
    r5.global;
    console.log(r5.exec(str));
    console.log(r5.exec(str));
    console.log(r5.exec(str));
    console.log(r5.exec(str));
    
    // const r6=/\.\b/i;
    // console.log(r6.exec(str));

    console.log(str.match(r5));

}

{
const exp=/A..../i;
const r=/.a.o/gimus;

console.log(exp.source);

    r.global; // true
    r.ignoreCase; // true
    r.multiline; // false
    r.sticky; // false
    r.unicode; // false
}

{
    let miCadena = "JuanPedro:44:777";
    let miCadena2 = new String ("JuanPedro:Berr")
    console.log(miCadena);
    console.log(miCadena2);
    console.log("En mayusculas: "+ miCadena2.toUpperCase());
    console.log("En minuscula: "+ miCadena2.toLowerCase());
    console.log("El valor: "+ miCadena2.charAt(0));
    console.log("Primera posicion donde se encuentra el caracter: "+ miCadena2.indexOf(":",0));
    console.log("Ultima posicion donde se encuentra el caracter: "+ miCadena2. lastIndexOf (":", miCadena.length));
    console.log("Remplaza el texto1 por el 2: "+ miCadena2.replace(":",";"));
    console.log("Remplaza el texto1 por el 2: "+ miCadena2.replaceALL(":",";"));

    let todosLosTrozos = miCadena.split(":");
    console.log(todosLosTrozos);

    console.log("Subcadena: "+miCadena.substring(0,miCadena.indexOf(":")));
    console.log(miCadena.includes("44")?"si incluye mi edad":"no incluye mi edad");

    

}
let parImpar1 = (n) =>{
    if (n%2==0){
        console.log(n);
        return "PAR";
    }else if(n==1){
        console.log(n);
        return "IMPAR";
    }
    console.log(n);
    return parImpar1(n-2);
}

function cuentaAtras1(n){
    //caso base
    if (n==0){
        console.log(n);
        return;
    }else{
        console.log(n);
        return cuentaAtras1(n-1);
    }
    
}

//lalamada a cuentraAtras1
console.log("Llamada 1 cuentaAtras1");
cuentaAtras1(2);

//
let cuentaAtras3 = (n) =>{
    if (n==0){
        console.log(0);
        return;
    }else{
        console.log(n);
        return cuentaAtras1(n-1);
    }
}


const aprendiendo = function(javascript){
    console.log(`aprendiendo ${javascript}`);
}
aprendiendo("cualquier cosa");

const aprendiendo1 = (javascript) =>

const sumar2 = function (n1,n2){
    return n1+n2;
}

const sumar3 = (n1,n2) => n1+n2;

(function(param1,param2, ...param3){
    console.log("Funcion anonima 1 sin parametros");
    console.log(param1);
    console.log(param2);
    console.log(param3);
})(10,20,30,40);

const f3 = function(param1,param2,param3){
    console.log("funcion f3");
    let r=parseInt(param1) + parseInt(param2) + parseInt(param3);
    return r;
}
console.log("1 llamada a f3:");
let r=f3(10,20);
console.log(r);

function f2(param1, param2, param3=0){
    console.log("Funcion f");
    console.log(param1);
    console.log(param2);
    console.log(param3);
}
console.log("1 llamada a f2:");
f2(10,20,30);
f2(10,20);
f2(10,20,"30",40,50);


{
    let a=5,b=8;
    console.log(a<b? " a es menor que b" : "no lo se");
}


{ //incremento 
    let x=5,y;
    y=++x;
    console.log("resultado: "+y+ " x: "+x); //6, 6
    y=x++;
    console.log("resultado: "+y+ " x: "+x);//6, 5
    y=--x;
    console.log("resultado: "+y+ " x: "+x);//4, 4
    y=x--;
    console.log("resultado: "+y+ " x: "+x);// 4, 5
    y=-x;
    console.log("resultado: "+y+ " x: "+x);// -5, 5
    
}


{//operadores de asignacion
    let num1=3;
    let num2=5;
    num2+=num1;
    num2-=num1;
    num2*=num1; //15
    num2/=num1; //5
    num2%=num1; //2
     console.log("resultado: "+num2);
}

{

    console.time("tiempo");
    const arreglo = new Array(1000000);
    for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
    }
    console.timeEnd("tiempo"); //el texto de .time y

}
 /**
{

    let provincia;
    provincia=prompt("Introduzca la provincia ","Valencia");
    alert("Usted ha introducido la siguiente información "+provincia);
    console.log("Operación realizada con éxito");
}

{
    let respuesta;
    respuesta=confirm ("¿Desea cancelar la suscripción?");
    alert("Usted ha contestado que "+respuesta);

}
*/
{
 "use strict"
   a=10;
   console.log(a);
}

{
    let num="100"; //Es una cadena
    let num2="100.13"; //Es una cadena
    let num3=11; // Es un entero

    let n=parseInt(num); // Almacena un entero. Si hubiera habido parte decimal
    let n2=parseFloat(num); // Almacena un decimal
    let n3=num3.toString(); // Almacena una cadena
    let o=parseFloat(num2);
    let p=parseFloat(num3);
    console.log("n: "+n+" n2: "+n2+" n3: "+n3+ " o: "+o+" p: "+p);

}


{
    // <, <=, >, <= también hacen coercion. No existe >== ni <==
    let arr = [ "1", "10", "100", "1000" ];
    for (let i = 0; i < arr.length && arr[i] < 500; i++) {
    console.log(i);
    }//0,1,2

        var x = "10";
    var y = "9";
    console.log(x < y); // true, los dos son String y los compara como cadena

}

{ //cohersion

 let a="2", b=10;
 console.log( typeof a + " " + typeof b)
 console.log( a + b ); //210

}


{
    let array1= [1,2,3];
    let array2= [...array1];
    console.log("array1: " +array1+ " y array2: "+array2);



     let arr1 = [1,2], arr2;
     arr2 = arr1; //esta haciendo una referencia
     arr1.push(3); //añade un elemento al final de la tabla

     console.log("arr1: " +arr1+ " y arr2: "+arr2);

    let a=7, b;
    b=a;
    a=10;
    console.log("a = " +a+ " b = "+b);
}

{
    let nombre="Pedro";
    let email="d412@gmail.com";
    // Concatenación
console.log("Nombre Cliente: " + nombre + " Email: " + email);
// Template Strings - String Literals
console.log(`Nombre Cliente: ${nombre} Email: ${email}`);

}

{
    function ejemplo(){
        ejemplo=3; // Equivale a declararla fuera de la funcion como var
        if (ejemplo === 3){
        var variable1 = 1;
        var  variable2 = 2;
        console.log("Aqui");
        }
        console.log(variable1); // variable1 existe en este lugar
        console.log(variable2); // variable2 no existe en este lugar
        }
        ejemplo();
}


{
const miArray=[1,2,3]
console.log(miArray[0]); // Muestra el valor 1
miArray[0]=4;
console.log(miArray[0]); // Muestra el valor 4
miArray=[]; // Esto falla
}
