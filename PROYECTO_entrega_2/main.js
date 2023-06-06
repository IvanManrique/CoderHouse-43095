document.getElementById("edad").addEventListener("input", function() {
  if (this.value.length > 2) { //Permite que el usuario ingrese los dos digitos de su edad antes de mostrar la alerta
    var edad = parseInt(this.value);
    if (isNaN(edad) || edad <= 18 || edad >= 84) { // Valida que la edad del usuario sea un número y esté entre 18 y 84 años
      alert("Debes tener entre 18 y 84 años para solicitar el crédito");
    }
  }
});

var ciudad;
document.getElementById("ciudad").addEventListener("change", function() { // Captura la ciudad seleccionada en el dropdown
  ciudad = this.value;
  console.log(ciudad);
});

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
  var monto = parseFloat(document.getElementById("monto").value);
  var email = document.getElementById("email").value;
  var interes = parseFloat(document.querySelector('input[name="interes"]:checked').value);
  var telefono = parseInt(document.getElementById("telefono").value);
  var plazo = parseInt(document.getElementById("plazo").value);

  var crearArray = [
    { name: "Nombre", value: name },
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