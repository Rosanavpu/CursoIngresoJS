/*
Rosana Peralta
if 02
*/

function mostrar() {
  //tomo la edad
  let edadIngresada;
  edadIngresada = document.getElementById("txtIdEdad").value;
  edadIngresada = parseInt(edadIngresada)
  if (edadIngresada > 17) {
    return alert("Eres mayor de edad");
  }
} //FIN DE LA FUNCIÓN
