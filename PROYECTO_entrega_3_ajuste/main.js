let ciudad;
document.getElementById("ciudad").addEventListener("change", function() {
  ciudad = this.value;
  console.log(ciudad);
});

document.getElementById("telefono").addEventListener("input", function() {
  let telefono = this.value;
  let isValid = /^\d+$/.test(telefono);
  if (!isValid || telefono.length > 10) {
    document.getElementById("resultado").textContent = "Por favor ingrese los 10 dígitos de su número de teléfono sin caracteres especiales como +, *, /, #";
    this.value = "";
  } else {
    let telefonoValido = parseInt(telefono);
    console.log(telefonoValido);
  }
});

function enviarFormulario(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let documentoID = document.getElementById("documentoID").value;
  let monto = parseFloat(document.getElementById("monto").value);
  let email = document.getElementById("email").value;
  let interes = parseFloat(document.querySelector('input[name="interes"]:checked').value);
  let telefono = parseInt(document.getElementById("telefono").value);
  let plazo = parseInt(document.getElementById("plazo").value);
  let edad = parseInt(document.getElementById("edad").value);

  if (edad < 18 || edad > 84) {
    document.getElementById("resultado").textContent = "Debe tener entre 18 y 84 años para solicitar el crédito";
    return;
  }

  let crearArray = [
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

  let interesMensual = interes / 100 / 12;
  let plazos = plazo;
  let cuotaMensual = (monto * interesMensual) / (1 - Math.pow(1 + interesMensual, -plazos));
  cuotaMensual = cuotaMensual.toFixed(2);

  let resultadoCuotas = document.getElementById("resultado");
  resultadoCuotas.textContent = name + ", tu cuota mensual es: $" + cuotaMensual + " a un plazo de " + plazo + " meses, con un interés fijo de " + interes + "%, recuerda que esta oferta solo es válida para la ciudad de " + ciudad;

  document.getElementById("formulario").reset();
}

function guardarDatos() {
  let documentoID = document.getElementById("documentoID").value;
  let email = document.getElementById("email").value;

  let storedDocumentoID = localStorage.getItem("documentoID");
  let storedEmail = localStorage.getItem("email");

  if (storedDocumentoID === documentoID) {
    document.getElementById("resultado").textContent = "Usted ya ha solicitado un crédito, por favor espere la llamada de nuestro asesor.";
    return;
  } else if (storedEmail === email) {
    document.getElementById("resultado").textContent = "Usted ya ha solicitado un crédito, por favor espere la llamada de nuestro asesor.";
    return;
  } else {
    localStorage.setItem("documentoID", documentoID);
    localStorage.setItem("email", email);
  }
}
guardarDatos();

const mensajeResultado = () => {
  Swal.fire({
    title: 'Gracias por enviar tus datos',
    text: 'Tu cuota mensual es ' + cuotaMensual,
    imageUrl: 'https://giphy.com/embed/3o7TKPdUkkbCAVqWk0',
    imageWidth: 480,
    imageHeight: 330,
    imageAlt: 'Simulación terminada',
  });
};
document.getElementById("formulario").addEventListener("submit", mensajeResultado);
document.getElementById("formulario").addEventListener("submit", enviarFormulario);
