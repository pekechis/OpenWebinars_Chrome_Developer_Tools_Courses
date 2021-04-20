// Borrar todos los elementos seleccionados con el selector
function borrarSeleccionados(selector) {
    
    //Selecciono los elementos de acuerdo a un selector
    let elementos = document.querySelectorAll(selector);

    //Recorro los elementos
    elementos.forEach(function (nodo, indice, elementos) {
        //nodo.style.display="none";
        //Borro los elementos. La versión superior que está comentada simplemente los oculta
        nodo.parentNode.removeChild(nodo);
    });
}

//Añado las clase que paso como parámetro a los elementos seleccionados con el selector
function addClase(selector,clase) {
    
    //Selecciono los elementos de acuerdo a un selector
    let elementos = document.querySelectorAll(selector);

    //Recorro los elementos. 
    elementos.forEach(function (nodo, indice, elementos) {
        //Añado la clase que he recibido como parámetro
        nodo.classList.add(clase);
    });
}

//Live expression
parseInt(document.getElementById("num1").value)+parseInt(document.getElementById("num2").value)

//Live Expression
//Primera funcion como Snippet
(function() {
    window.borrarSeleccionados = function(selector) {
    
        //Selecciono los elementos de acuerdo a un selector
        let elementos = document.querySelectorAll(selector);

        //Recorro los elementos
        elementos.forEach(function (nodo, indice, elementos) {
            //nodo.style.display="none";
            //Borro los elementos. La versión superior que está comentada simplemente los oculta
            nodo.parentNode.removeChild(nodo);
        });
    }
    
})();

//Segunda función como Snippet
(function() {
    window.addClase = function(selector,clase) {
    
        //Selecciono los elementos de acuerdo a un selector
        let elementos = document.querySelectorAll(selector);

        //Recorro los elementos. 
        elementos.forEach(function (nodo, indice, elementos) {
            //Añado la clase que he recibido como parámetro
            nodo.classList.add(clase);
        });
    }
    
})();
