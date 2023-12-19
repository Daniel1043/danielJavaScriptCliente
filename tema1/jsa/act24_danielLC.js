/**
 * 24. Programa una función que elimine cierto patrón de 
 * caracteres de un texto dado, pe.
miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
devolverá "1, 2, 3, 4 y 5.
 * 
 */
{
    function ejercicio24(miFuncion, sustituir){
   
     
            miFuncion=miFuncion.replaceAll(sustituir," ");

        
      
    
     console.log(miFuncion);
        
    }
    ejercicio24("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz");
}
