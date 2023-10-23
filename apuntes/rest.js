"use strict"
{

    function f(a,b){
        return a+b;
    }
    console.log(f(10,20));

    console.log("\nREST en un array de numeros");
    function f2(a,b, ...c){
        let n=a+b;
        let m=0;
        for(let num of c){
            m+=num;
        }
        return n+m;
    }

    console.log(f2(10,20,30,40));
    console.log(f2(10,20,40));
    console.log(f2(10,20,30,40,50,60));

    const user1={
        nombre:"Federico", edad: 30
    };
    const user2={
        nombre: "Ramon", edad:31
    };
    const user3={
        nombre: "Carlos", edad:32
    };
    const users=[
        {nombre: "Juan", edad:35},
        {nombre: "Pepe", edad:40},
        {nombre: "Matilde", edad:45}
    ];

    function f3(u1, ...u2){
        //TO DO: sumar las edade sy devolver la suma
        let m=0;
        for(let num of u2){
            if(Array.isArray(num)){
                for(let i =0; i<num.length;i++){
                    m+=num[i].edad;
                }
            }else{
                m+=num.edad;
            }
        }
        return u1.edad+m;
    }


    console.log(f3(user1,user2,user3));
    console.log(f3(user1,user2,user3,users ));
}