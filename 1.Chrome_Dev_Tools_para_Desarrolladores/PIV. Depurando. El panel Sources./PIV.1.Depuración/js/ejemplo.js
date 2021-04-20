function crearTabla() {
            
    console.log("Comienzo el proceso de creación de la tabla");

    let filas = parseInt(document.getElementById("filas").value);
    let columnas = parseInt(document.getElementById("columnas").value);
    let table = document.getElementById("tabla");
    let content = "";


    for (let i = 0; i < filas; i++) {

        content += "<tr>";

        for (let j = 0; j < columnas; j++) {
            content += "<td> X </td>";
        }

        content += "</tr>";

    }

    table.innerHTML = content;

    console.log("Finaliza el proceso de creación de la tabla");
}

