/**
 * 34. Programa una función que valide que un texto sea un email
 *  válido, p.e. miFuncion
(“javier.ferrer@iesmartinezm.es”) devolverá verdadero. NOTA: caracteres,
 números, puntos
guión alto y bajo+@+caracteres, números+.+al menos dos caracteres.
 */

{
    function ejercicio34(email){
        
 
        
      var correcto = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  console.log(correcto.test(email));

    
        
    }
    ejercicio34("javier.ferrer@iesmartinezm.es");
}