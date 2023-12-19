"use strict"

{
    console.log(window);
    console.log(window.document);

    //OBJETO LOCATION
    console.log(window.location);
    console.log(window.location.origin);
    console.log(window.location.protocol);
    console.log(window.location.host);
    console.log(window.location.hostname);
    console.log(window.location.port);
    console.log(window.location.href);
    console.log(window.location.pathname);

    //OBEJTO NAVIGATOR
    console.log(window.navigator);
    console.log(window.navigator.connection);
    console.log(window.navigator.geolocation);
    let btnGeolocalizar = document.querySelector("#idGeo");
    btnGeolocalizar.addEventListener("click", ()=> window.navigator.geolocation.getCurrentPosition(miUbicacion));
    
    console.log("dispositivo multimedia");
    console.log(window.navigator.mediaDevices);
    console.log(window.navigator.onLine);
    console.log(window.navigator.storage);
    
    function miUbicacion(pos){
        let crd = pos.coords;
        console.log("Tu ubicacion actua es: ")
        console.log("Latitud: "+crd.latitude);
        console.log("Longitud: "+crd.longitude);
        console.log("Mas menos: "+crd.accuracy+ " metros.")
    }
}