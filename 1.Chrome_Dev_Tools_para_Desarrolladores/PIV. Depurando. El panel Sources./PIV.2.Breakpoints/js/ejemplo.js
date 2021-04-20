function crearTabla() {
            
    console.log("Comienzo el proceso de creación de la tabla");

    let filas = parseInt(document.getElementById("filas").value);
    let columnas = parseInt(document.getElementById("columnas").value);
    let table = document.getElementById("tabla");
    let texto = document.getElementById("texto").value;
    let content = "";

    if (columnas<1 || filas<1 || texto=="") {
        throw "Datos no válidos";
    } else {
        for (let i = 0; i < filas; i++) {

            content += crearFila(texto,columnas);        
    
        }
    
        table.innerHTML = content;
    
        console.log("Finaliza el proceso de creación de la tabla");
    }
    
}

function crearFila(texto,columnas) {

    let content = "<tr>"
    
    for (let index = 0; index < columnas; index++) {        
        content+="<td>"+texto+"</td>";
    }

    content+="</tr>";

    return content;
}

function hacerPeticion() {
    
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.status != 200) {
            throw "Error en petición Ajax";
        } else {
            alert(JSON.parse(this.responseText).title);
        }
    }

    request.open("GET","https://jsonplaceholder.typicode.com/todos/1");
    request.send();
}

