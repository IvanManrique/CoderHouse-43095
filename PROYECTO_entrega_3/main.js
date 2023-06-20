var ciudad;
document.getElementById("ciudad").addEventListener("change", function() { // Captura la ciudad seleccionada en el dropdown
  ciudad = this.value;
  console.log(ciudad);
});

var documentoID = document.getElementById("documentoID").value;
var email = document.getElementById("email").value;
guardarDatos(documentoID, email);

document.getElementById("telefono").addEventListener("input", function() {
  var telefono = this.value;
  var isValid = /^\d+$/.test(telefono); // Valida que el número de teléfono no tenga caracteres especiales
  if (!isValid || telefono.length > 10) { // Valida que el n{umero de teléfono tenga máximo 10 digitos
    alert("Por favor ingrese los 10 dígitos de su número de teléfono sin caracteres especiales como +, *, /, #");
    this.value = "";
  } else {
    var telefonoValido = parseInt(telefono);
    console.log(telefonoValido);
  }
});

function enviarFormulario(event) { // Función para traer los datos del formulario y calcular los pagos mensuales
  event.preventDefault();

  var name = document.getElementById("name").value;
  var documentoID = document.getElementById("documentoID").value;
  var monto = parseFloat(document.getElementById("monto").value);
  var email = document.getElementById("email").value;
  var interes = parseFloat(document.querySelector('input[name="interes"]:checked').value);
  var telefono = parseInt(document.getElementById("telefono").value);
  var plazo = parseInt(document.getElementById("plazo").value);
  var edad = parseInt(document.getElementById("edad").value);

  // Valida que la edad esté entre 18 y 84 años
  if (edad < 18 || edad > 84) {
    alert("Debe tener entre 18 y 84 años para solicitar el crédito");
    return;
  }

  var crearArray = [
    { name: "Nombre", value: name },
    { name: "Identificación", value: documentoID },
    { name: "Ciudad", value: ciudad },
    { name: "Edad", value: edad },
    { name: "Email", value: email },
    { name: "Telefono", value: telefono },
    { name: "Monto a financiar", value: monto }
  ];

  console.log("Array Creado:");
  crearArray.forEach(function(field) {
    console.log(field.name + ": " + field.value);
  });

  var interesMensual = interes / 100 / 12;
  var plazos = plazo;
  var cuotaMensual = (monto * interesMensual) / (1 - Math.pow(1 + interesMensual, -plazos));
  cuotaMensual = cuotaMensual.toFixed(2);

  var resultadoCuotas = document.getElementById("resultado");
  resultadoCuotas.textContent = name + ", tu cuota mensual es: $" + cuotaMensual + " a un plazo de " + plazo + " meses, con un interés fijo de " + interes + "%, recuerda que esta oferta solo es válida para la ciudad de " + ciudad;

  document.getElementById("formulario").reset();
}

function guardarDatos() {
  var documentoID = document.getElementById("documentoID").value;
  var email = document.getElementById("email").value;

  // Revisa el local storage para validar si el documento de identidad o el email han sido utilizados antes.
  var storedDocumentoID = localStorage.getItem("documentoID");
  var storedEmail = localStorage.getItem("email");

  if (storedDocumentoID === documentoID) {
    alert("Usted ya ha solicitado un crédito, por favor espere la llamada de nuestro asesor.");
    return;
  } else if (storedEmail === email) {
    alert("Usted ya ha solicitado un crédito, por favor espere la llamada de nuestro asesor.");
    return;
  } else {
    // Guardar datos en local storage
    localStorage.setItem("documentoID", documentoID);
    localStorage.setItem("email", email);
  }
}
guardarDatos()

const mensajeResultado =() => {
Swal.fire({
  title: 'Gracias por enviar tus datos',
  text: 'Tu cuota mensual es ' + cuotaMensual,
  imageUrl: 'https://giphy.com/embed/3o7TKPdUkkbCAVqWk0',
  imageWidth: 480,
  imageHeight: 330,
  imageAlt: 'Simulación terminada',
})
}
document.getElementById("formulario").addEventListener("submit", mensajeResultado);
document.getElementById("formulario").addEventListener("submit", enviarFormulario);

/*// Enviar Email al usuario cuando registra los datos. Podría utilziar SMTP para efectuar el envío, aún estoy investigando como hacerlo. :)
function sendEmail(name, ciudad) {
  var mensaje = name + ", tu cuota mensual es: $" + cuotaMensual + " a un plazo de " + plazo + " meses, con un interés fijo de " + interes + "%, recuerda que esta oferta solo es válida para la ciudad de " + ciudad + "\n\n";
  mensaje += "Nombre: " + name + "\n";
  mensaje += "Ciudad: " + ciudad + "\n";

  // Crea una impresión en la consola simulando el envío de email
  console.log("Correo enviado a: " + email);
  console.log("Asunto: Solicitud de crédito. Financiera 'El Exprimidor'");
  console.log("Mensaje:\n" + mensaje);
};*/