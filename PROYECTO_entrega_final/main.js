let ciudad;
let diferenciaAnios;
let edad;

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

const calcularEdad = (event) => {
  const fechaSeleccion = new Date(event.target.value);
  const fechaActual = new Date();
  diferenciaAnios = fechaActual.getFullYear() - fechaSeleccion.getFullYear();
  edad = diferenciaAnios;
  console.log(`El usuario tiene ${diferenciaAnios} años.`);
};

const datePicker = document.getElementById("datePicker");
datePicker.addEventListener("change", calcularEdad);

function enviarFormulario(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let documentoID = document.getElementById("documentoID").value;
  let monto = parseFloat(document.getElementById("monto").value);
  let email = document.getElementById("email").value;
  let interes = parseFloat(document.querySelector('input[name="interes"]:checked').value);
  let telefono = parseInt(document.getElementById("telefono").value);
  let plazo = parseInt(document.getElementById("plazo").value);

  let crearArray = [];

  let camposForm = document.getElementById("formulario").getElementsByTagName("input");
  for (let i = 0; i < camposForm.length; i++) {
    let campoNombre = camposForm[i].name;
    let campoValor = camposForm[i].value;
    crearArray.push({ name: campoNombre, value: campoValor });
  }

  console.log("Array Creado:");
  crearArray.forEach(function (field) {
    console.log(field.name + ": " + field.value);
  });

  let interesMensual = interes / 100 / 12;
  let plazos = plazo;
  let cuotaMensual = (monto * interesMensual) / (1 - Math.pow(1 + interesMensual, -plazos));
  cuotaMensual = cuotaMensual.toFixed(2);

  let resultadoCuotas = document.getElementById("resultado");
  resultadoCuotas.textContent = `${name}, tu cuota mensual es: $${cuotaMensual} a un plazo de ${plazo} meses, con un interés fijo de ${interes}%, recuerda que esta oferta solo es válida para la ciudad de ${ciudad}`;

  document.getElementById("formulario").reset();
}

function guardarDatos() {
  let documentoID = document.getElementById("documentoID").value;
  let email = document.getElementById("email").value;

  if (!validarDocumentoID(documentoID)) {
    document.getElementById("resultado").textContent = "Por favor ingrese una identificación válida";
    return;
  }

  if (!validarEmail(email)) {
    document.getElementById("resultado").textContent = "Por favor ingrese un correo válido";
    return;
  }

  let storedDocumentoID = localStorage.getItem("documentoID");
  let storedEmail = localStorage.getItem("email");

  if (storedDocumentoID === documentoID || storedEmail === email) {
    document.getElementById("resultado").textContent = "Usted ya ha solicitado un crédito, por favor espere la llamada de nuestro asesor.";
    return;
  }

  localStorage.setItem("documentoID", documentoID);
  localStorage.setItem("email", email);
}

function validarDocumentoID(documentoID) {
  return /^\d{10}$/.test(documentoID);
}

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

guardarDatos();

const validarEdad = (edad) => {
  if (edad < 18 || edad > 84) {
    document.getElementById("resultado").textContent = "Debe tener entre 18 y 84 años para solicitar el crédito";
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Debe tener entre 18 y 84 años para solicitar el crédito',
      footer: '<a href="legal.html">Ver términos y condiciones</a>'
    });
    return false;
  }
  return true;
};

const mensajeExitoso = (event) => {
  Swal.fire({
    title: 'Enviar datos?',
    text: 'Al enviar los datos, usted acepta nuestros términos y condiciones!',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Enviar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Datos enviados',
        'Nuestros asesores se comunicarán pronto'
      );
      enviarFormulario(event);
      let resultadoCuotas = document.getElementById("resultado");
      console.log(resultadoCuotas.textContent); // Display resultadoCuotas.context in the console
    }
  });
};

document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();

  validarEdad(edad);

  if (validarEdad(edad)) {
    mensajeExitoso(event);
  }
});
