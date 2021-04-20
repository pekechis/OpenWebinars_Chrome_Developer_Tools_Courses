let cabeceras = document.querySelectorAll("h1,h2,h3");

cabeceras.forEach(function(nodo,index,cabeceras) {
    nodo.textContent="HOLA MUNDO";
});