/*
Rosana Peralta
if 06
*/

function mostrar() {
  let edadIngresada = document.getElementById("txtIdEdad").value;
  edadIngresada = parseInt(edadIngresada);
  if (edadIngresada < 13) {
    alert("menor a 13 años");
  }
  if (edadIngresada > 17) {
    alert("18 años o más");
  }
  if (edadIngresada > 12 && edadIngresada < 18) {
    alert("adolescente");
  }
} //FIN DE LA FUNCIÓN
