/*let monto = parseFloat(prompt("Ingrese el monto a financiar: "));
let tasaInteres = prompt("Ingrese la tasa de interés: ");
var plazo = parseInt(prompt("Ingrese el plazo de financiamiento: "));

if (isNaN(plazo) || plazo <= 0) {  // Valida si es un número
  alert("El plazo de financiamiento debe ser un número válido y mayor que cero.");
} else {
  if (!tasaInteres.includes("%")) { //Valida si el valor ingresado contiene %
    tasaInteres += "%"; // Si no contiene %, lo incluye en un string con la tasa de interés 
  }
  
  tasaInteres = parseFloat(tasaInteres.replace("%", "")); // Remplaza % por un campo vacío y lo converte a número utilziando parseFloat
  let tasaMensual = tasaInteres / 100 / 12; // Convierte tasa mensual en %
  let cuotaMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo)); // Calcula la cuota mensual teniendo en cuenta el factor de amortización expresado en (1 - Math.pow(1 + tasaMensual, -plazo));

  alert("Su cuota mensual es: $" + cuotaMensual.toFixed(2));
}
*/

let monto = parseFloat(prompt("Ingrese el monto a financiar: "));
let tasaInteres = prompt("Ingrese la tasa de interés: ");
var plazo = parseInt(prompt("Plazo de financiamiento: "));

if (isNaN(monto) || isNaN(tasaInteres) || isNaN(plazo)) { // Valida si es un número
  alert("Ingrese valores numéricos válidos para el monto, la tasa de interés y el plazo de financiamiento.");
} else {
  if (!tasaInteres.includes("%")) { //Valida si el valor ingresado contiene %
    tasaInteres += "%"; // Si no contiene %, lo incluye en un string con la tasa de interés
  }
  
  tasaInteres = parseFloat(tasaInteres.replace("%", "")); // Remplaza % por un campo vacío y lo converte a número utilziando parseFloat
  let tasaMensual = tasaInteres / 100 / 12; // Convierte tasa mensual en %
  let cuotaMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo)); // Calcula la cuota mensual teniendo en cuenta el factor de amortización expresado en (1 - Math.pow(1 + tasaMensual, -plazo));

  alert("Su cuota mensual es: $" + cuotaMensual.toFixed(2)); // Devuelve una alerta con la cuota mensual
}