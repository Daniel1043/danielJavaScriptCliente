"use stritc"
{

    //forma1 
    let arrayBi1 = new Array();
    arrayBi1[0]=[1,2,3,4,5];
    arrayBi1[1]=[2,3,4,5,6];
    arrayBi1[2]=[3,4,5,6,7];
    arrayBi1[2][4]=9;
    console.log(arrayBi1);

    //Forma 2
    let numFilas=2;
    let numColumnas=4;
    let arrayBi2 = new Array(numFilas);
    for(let i=0;i<numFilas;i++){
        arrayBi2[i]=new Array(numColumnas);
    }
    console.log(arrayBi2);

    //releno el array con ceros
    for(let i=0;i<numFilas;i++){
            for(let j=0; j<numColumnas;j++){
                arrayBi2[i][j]=0;
            }
    }
    console.log(arrayBi2);

    //Forma 3
    let arrayBi3 = Array.from(Array(2), ()=>new Array(4));
    console.log(arrayBi3);

    for(let i=0;i<numFilas;i++){
        for(let j=0; j<numColumnas;j++){
            arrayBi3[i][j]=1;
        }
    }
    console.log(arrayBi3);

}