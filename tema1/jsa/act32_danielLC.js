/**
 * 32. Programa una función que dada una cadena de texto cuente el número 
 * de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4,
 *  Consonantes: 5
 */

{
    function ejercicio32(palabra){
        let vocal=0;
        let consonante=0;
        palabra=palabra.replace(/\s+/g, '');
        for(let i=0;i<palabra.length;i++){
            for(j=0;j<palabra[i].length;j++){
                if(palabra[i][j]=="a"||palabra[i][j]=="e"||palabra[i][j]=="i"||palabra[i][j]=="o"||palabra[i][j]=="u"){
                    vocal++;
                 }

                 if(palabra[i][j] !="a" && palabra[i][j]!="e" && palabra[i][j]!="i" && palabra[i][j]!="o" && palabra[i][j]!="u"){
                    consonante++;
                 }
            }
           
           

       }

       

       console.log("Vocales:" +vocal);
       console.log("Consonantes:" +consonante);
     
        
    }
    ejercicio32("hola mundo");
}
