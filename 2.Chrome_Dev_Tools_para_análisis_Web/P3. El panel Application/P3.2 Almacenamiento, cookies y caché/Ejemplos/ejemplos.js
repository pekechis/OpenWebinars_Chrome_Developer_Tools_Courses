// EJEMPLOS DE LOCAL STORAGE
localStorage.setItem("nombre","Pepe");
localStorage.setItem("apellidos","Pepe");


alert(localStorage.getItem("nombre"));

console.log(localStorage);
localStorage.removeItem("apellidos");

console.log(localStorage);

localStorage.clear();

//EJEMPLOS DE SESSION STORAGE
sessionStorage.setItem("nombre","Pepe");
sessionStorage.setItem("apellidos","Pepe");


alert(sessionStorage.getItem("nombre"));

console.log(sessionStorage);
sessionStorage.removeItem("apellidos");

console.log(sessionStorage);

sessionStorage.clear();

//Comprobación  de que disponemos de indexedDB
if (!window.indexedDB) {
    window.alert("Su navegador no soporta una versión estable de indexedDB. Tal y como las características no serán validas");
}

