/**
 * 33. Programa una función que valide que un texto sea un nombre válido, p.e. miFuncion (“Javier
Ferrer”) devolverá verdadero. NOTA: No puede haber números ni caracteres especiales como
¡ o ¿
 * 
 */

{
    function ejercicio33(nombre){
        
      let valido=true;
        
      for(let i=0;i<nombre.length;i++){
        for(j=0;j<nombre[i].length;j++){
            if(nombre[i][j]=="?"||nombre[i][j]=="¿"||nombre[i][j]=="!"||nombre[i][j]=="¡"||nombre[i][j]=="1"||
            nombre[i][j]=="2"||nombre[i][j]=="3"||nombre[i][j]=="4"||nombre[i][j]=="5"||nombre[i][j]=="6"||
            nombre[i][j]=="7"||nombre[i][j]=="8"||nombre[i][j]=="9"||nombre[i][j]=="0"||nombre[i][j]=="'"||
            nombre[i][j]=="#"||nombre[i][j]=="@"||nombre[i][j]=="|"||nombre[i][j]=="~"||nombre[i][j]=="%"){
                valido=false;
             }

             
        }
       
       }

      console.log(valido);
        
    }
    ejercicio33("Javier Ferrer");
}