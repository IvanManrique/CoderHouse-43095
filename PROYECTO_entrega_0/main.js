let monto, tasaInteres, plazo;
 
    while (isNaN(monto)) { // Valida que el monto a financiar sea un número
      monto = parseFloat(prompt("Ingrese el monto a financiar: "));
      if (isNaN(monto)) {
        alert("Por favor ingrese el monto sin puntos, comas o $");
      }
    }
    while (isNaN(tasaInteres)) { // Valida que el interés sea un número
      tasaInteres = prompt("Ingrese la tasa de interés: ");
      if (isNaN(tasaInteres)) {
        alert("Por favor ingrese la tasa de interés sin %");
      }
    }    
    while (isNaN(plazo)) { // Valida que el plazo sea un número
      plazo = parseInt(prompt("Plazo de financiamiento: "));
      if (isNaN(plazo)) {
        alert("Por favor ingrese un número válido");
      }
    }

if (!tasaInteres.includes("%")) { //Valida si el valor ingresado contiene %
  tasaInteres += "%"; // Si no contiene %, lo incluye en un string con la tasa de interés
  
  tasaInteres = parseFloat(tasaInteres.replace("%", "")); // Remplaza % por un campo vacío y lo converte a número utilziando parseFloat
  

  let tasaMensual = tasaInteres / 100 / 12; // Convierte tasa mensual en %
  let cuotaMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo)); // Calcula la cuota mensual teniendo en cuenta el factor de amortización expresado en (1 - Math.pow(1 + tasaMensual, -plazo));

  alert("Su cuota mensual es: $" + cuotaMensual.toFixed(2) + " con un interés de " + tasaInteres + "%"); // Devuelve una alerta con la cuota mensual
}