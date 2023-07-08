function guardarDatos() {
  let documentoID = document.getElementById("documentoID").value;
  let email = document.getElementById("email").value;

  // Validación del documento de identidad y el correo
  if (!validarDocumentoID(documentoID)) {
    document.getElementById("resultado").textContent =
      "Por favor ingrese una identificación válida";
    return;
  }

  if (!validarEmail(email)) {
    document.getElementById("resultado").textContent =
      "Por favor ingrese un correo válido";
    return;
  }

  let storedDocumentoID = localStorage.getItem("documentoID");
  let storedEmail = localStorage.getItem("email");

  if (storedDocumentoID === documentoID && storedEmail === email) {
    document.getElementById("resultado").textContent =
      "Usted ya ha solicitado un crédito, por favor espere la llamada de nuestro asesor.";
    return;
  }

  localStorage.setItem("documentoID", documentoID);
  localStorage.setItem("email", email);
}

function validarDocumentoID(documentoID) {
  // Valida la identificación
  return /^\d{10}$/.test(documentoID);
}

function validarEmail(email) {
  // Valida que el email tenga el formato correcto
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Guarda los datos cuando el fomrulario se envíe
document.getElementById("formulario").addEventListener("submit", guardarDatos);