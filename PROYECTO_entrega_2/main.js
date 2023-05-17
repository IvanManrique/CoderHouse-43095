document.getElementById("creditForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que la página se vuelva a cargar al enviar el formulario

  // Traer los valores del formulario
  var name = document.getElementById("name").value;
  var creditAmount = document.getElementById("creditAmount").value;
  var interestRate = document.querySelector('input[name="interestRate"]:checked').value;
  var creditTerm = document.getElementById("creditTerm").value;

  // Perform calculations or further processing with the form values
  console.log("Nombre: " + name);
  console.log("Monot a financiar: " + creditAmount);
  console.log("Tasa de interés: " + interestRate);
  console.log("Plazo de financiamiento: " + creditTerm + " meses");

  // Calculate the monthly payment
  var monthlyInterestRate = interestRate / 100 / 12;
  var totalPayments = creditTerm;
  var monthlyPayment = (creditAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
  monthlyPayment = monthlyPayment.toFixed(2);

  alert(name + ", tu cuota mensual es: $" + monthlyPayment + " a un plazo de " + creditTerm + " meses, con un interés fijo de " + interestRate + " %"); // Muestra una alerta con la cuota mensual

    document.getElementById("creditForm").reset(); // Resetear el fomrulario
});