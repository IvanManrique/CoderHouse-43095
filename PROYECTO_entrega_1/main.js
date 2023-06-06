document.getElementById("edad").addEventListener("input", function() {
  if (this.value.length > 2) {
    var edad = parseInt(this.value);
    if (isNaN(edad) || edad <= 18 || edad >= 84) {
      alert("Debes tener entre 18 y 84 años para solicitar el crédito");
    }
  }
});

document.getElementById("ciudad").addEventListener("change", function() {
  var ciudad = this.value;
  console.log(ciudad);
});

document.getElementById("telefono").addEventListener("change", function() {
  var telefono = parseInt(this.value);
  console.log(telefono);
});

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var ciudad = document.getElementById("ciudad").value;
  var monto = parseFloat(document.getElementById("monto").value);
  var interes = parseFloat(document.querySelector('input[name="interes"]:checked').value);
  var plazo = parseInt(document.getElementById("plazo").value);

  var interesMensual = interes / 100 / 12;
  var plazo = plazo;
  var cuotaMensual = (monto * interesMensual) / (1 - Math.pow(1 + interesMensual, -plazo));
  cuotaMensual = cuotaMensual.toFixed(2);

  var resultadoCuotas = document.getElementById("resultado");
  resultadoCuotas.textContent = name + ", tu cuota mensual es: $" + cuotaMensual + " a un plazo de " + plazo + " meses, con un interés fijo de " + interes + "%, recuerde que esta oferta solo es válida para la ciuad de " + ciudad;

  document.getElementById("formulario").reset();
});

function sendEmail(name, ciudad) {
  var mensaje = name + ", tu cuota mensual es: $" + cuotaMensual + " a un plazo de " + plazo + " meses, con un interés fijo de " + interes + "%, recuerde que esta oferta solo es válida para la ciuad de " + ciudad;"\n\n";
  mensaje += "Nombre: " + name + "\n";
  mensaje += "Ciudad: " + ciudad + "\n";

  // Simulación en la consola de como se vería el correo enviado
  console.log("Correo enviado a: " + email);
  console.log("Asunto: Solicitud de crédito. Financiera 'El Exprimidor'");
  console.log("Mensaje:\n" + mensaje);
}