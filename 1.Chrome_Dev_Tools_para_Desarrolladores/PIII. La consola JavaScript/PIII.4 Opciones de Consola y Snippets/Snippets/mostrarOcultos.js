let elementosOcultos = document.querySelectorAll("*[display=none");

elementosOcultos.forEach(function(e,i,elements) {
    e.style = "display:block";
});