/*
Rosana Peralta
if 03
*/

function mostrar() {
  //tomo la edad
  let edadIngresada;
  edadIngresada = txtIdEdad.value;
  edadIngresada = parseInt(edadIngresada);
  if (edadIngresada > 17) {
    alert("mayor de edad");
  }
  if (edadIngresada < 18) {
    alert("menor de edad");
  }
} //FIN DE LA FUNCIÓN
