//Definir una variable
let v=5;

//Uso de la variable
v

//Mostrar los números del 0 al 9
for (let i = 0; i < 10; i++) {
    console.log(i);    
}

//Definir un objeto
let alumno = {"nombre": "Juan Diego","apellidos": "Pérez Jiméne" }

//Mostrar un campo el objeto
"Juan Diego"

//Mostrar el objeto entero
alumno

//Definición de una función hola mundo
let saludo = function(a="Mundo") {
    console.log("Hola "+a+"!!");
}

function despedida(a="Mundo") {
    console.log("Adios "+a+"!!");
}

//Obtener el primer párrafo
let primerparrafo = document.querySelector("p");

//Cambio los estilos del elemento
primeraparrafo.style="font-size:0.5rem";

//Modifico el contenido del elemento
primeraparrafo.textContent="Modifiado desde la consola";

//Selecciono todas las cabeceras
let cabeceras = document.querySelectorAll("h1,h2,h3");

//Mostrar todas las cabeceras
cabeceras

//Cambiar el contenido de todas las cabeceras
cabeceras.forEach(function(nodo,indice,cabeceras) {
    nodo.textContent="HOLA";
});

//Mostrar todas las cabeceras(nodos) por la consola
cabeceras.forEach(function(nodo,indice,cabeceras) {
   console.log(nodo);
});