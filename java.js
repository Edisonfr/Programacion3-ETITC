// Agregar evento click al botón de enviar del formulario
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor

    alert('Formulario enviado');

    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';
});

function validarFormulario() {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    // Validar que los campos no estén vacíos
    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    // Validar formato de email
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, ingrese un email válido.');
        return false;
    }

    // Si todo está correcto, enviar el formulario
    alert('¡Formulario enviado!');
    return true;
}
 // Función para agregar un nuevo destino
 function agregarInstrumento() {
    // El nuevo destino que se quiere agregar
    const nombreInstrumento = "Maracas";

    // Seleccionar la lista de destinos
    const listaInstrumentos = document.getElementById("instrumentos").querySelector("ul");

    // Crear un nuevo elemento "li"
    const elementoLista = document.createElement("li");
    elementoLista.textContent = nombreInstrumento;

    // Agregar el nuevo elemento a la lista
    listaInstrumentos.appendChild(elementoLista);
  }

  // Llamada a la función
  agregarInstrumento();
