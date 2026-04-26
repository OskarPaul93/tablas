function generarTabla(){
    let contenedor = document.getElementById("contenedorTabla");
    let numero= parseInt(document.getElementById("numero").value);
    document.getElementById("titulo").innerText = "🎈 Tabla del " + numero + " 🎈";

    let contenido = "";

    for (let i = 1; i <= 10; i++) {
        contenido= contenido + "<tr>" + "<td>" + numero + " x " + i + "</td>" + "<td>" + (numero * i) + "</td>" + "</tr>";
    }

    contenedor.innerHTML = contenido;
}


