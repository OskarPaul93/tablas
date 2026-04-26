function generarTabla(){
    let contenedor = document.getElementById("contenedorTabla");
    let numero = document.getElementById("numero").value;

    let contenido = "";

    for (let i = 1; i <= 10; i++) {
        contenido= contenido + "<tr>" + "<td>" + numero + "5 x " + i + "</td>" + "<td>" + (5 * i) + "</td>" + "</tr>";
    }

    contenedor.innerHTML = contenido;
}