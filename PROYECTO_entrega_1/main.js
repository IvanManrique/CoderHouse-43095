document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var monto = parseFloat(document.getElementById("monto").value);
    var tasaInteres = document.getElementById("tasaInteres").value;
    var plazo = parseInt(document.getElementById("plazo").value);
  
    if (isNaN(monto)) {
        alert('Por favor ingrese un número válido'); // Alerta si no es un númer o
        return; // Detiene el script si el valor no es válido
      }
    
      if (isNaN(tasaInteres)) {
          alert('Por favor ingrese un número válido'); // Alerta si no es un número
        return; // Detiene el script si el valor no es válido
      }
    
      if (isNaN(plazo)) {
          alert('Por favor ingrese un número válido'); // Alerta si no es un número
        return; // Detiene el script si el valor no es válido
      }
  
    if (!tasaInteres.includes('%')) { // Valida si contiene %
      tasaInteres += '%'; // Si no lo contiene, lo agrega al final del string
    }
  
    var tasaMensual = parseFloat(tasaInteres) / 100 / 12; //  Convierte tasaInteres en número con parseFloat
    var cuotaMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));
  
    alert("Su cuota mensual es: $" + cuotaMensual.toFixed(2));
  });