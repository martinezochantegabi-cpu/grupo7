
function irAProductos() {
    document.getElementById("productos").scrollIntoView({
        behavior: "smooth"
    });
}

function elegirSabor(sabor) {
    document.getElementById("sabor").value = sabor;

    document.getElementById("pedido").scrollIntoView({
        behavior: "smooth"
    });
}

function generarPedido() {
    const nombre = document.getElementById("nombre").value.trim();
    const sabor = document.getElementById("sabor").value;
    const cantidad = Number(document.getElementById("cantidad").value);
    const resultado = document.getElementById("resultado");

    if (nombre === "") {
        resultado.textContent = "Por favor, escribe tu nombre.";
        return;
    }

    if (!Number.isInteger(cantidad) || cantidad < 1) {
        resultado.textContent = "Ingresa una cantidad válida.";
        return;
    }

    resultado.textContent =
        "¡Gracias, " + nombre + "! Tu pedido de prueba es de " +
        cantidad + " galleta(s) de " + sabor + ".";
}

function guardarOpinion() {
    const opinion = document
        .getElementById("opinionUsuario")
        .value.trim();

    const mensaje = document.getElementById("mensajeOpinion");

    if (opinion === "") {
        mensaje.textContent = "Por favor, escribe tu opinión.";
        return;
    }

    const opiniones = JSON.parse(
        sessionStorage.getItem("opinionesGreenCookie") || "[]"
    );

    opiniones.push(opinion);

    sessionStorage.setItem(
        "opinionesGreenCookie",
        JSON.stringify(opiniones)
    );

    mensaje.textContent = "¡Gracias por compartir tu opinión!";
    document.getElementById("opinionUsuario").value = "";
}
