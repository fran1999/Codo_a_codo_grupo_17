function cargarContenido(pageName) {
    fetch('./template/' + pageName + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("main").innerHTML = data;
             registrarEnvioFormulario(); // Llama a la función que registra el envío del formulario después de cargar el contenido
        })
        .catch(error => console.error('Error al cargar el contenido:', error));
}

function enviarFormulario() {
    // Simplemente limpiamos el formulario
    document.getElementById("contactForm").reset();
    // Mostramos una alerta indicando que el formulario se envió correctamente
    alert("¡El formulario se envió correctamente!");

    // Devolvemos false para evitar que el formulario se envíe de la manera tradicional
    return false;
}

function registrarEnvioFormulario() {
    // Busca el formulario y agrega el evento de envío
    var form = document.getElementById("contactForm");
    form.onsubmit = enviarFormulario;
}
