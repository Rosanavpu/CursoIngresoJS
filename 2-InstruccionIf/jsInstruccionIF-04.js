/*
Rosana Peralta
if 04
*/

function mostrar() {
  //tomo la edad
  let edadIngresada;
  edadIngresada = document.getElementById("txtIdEdad").value;
  edadIngresada = parseInt(edadIngresada);
  //Con operadores
  // if (edadIngresada > 12 && edadIngresada < 18) {
  //   alert("adolescente");
  // }
  // Sin operadores
  if (edadIngresada < 18) {
    if (edadIngresada > 12) {
      alert("adolescente");
    }
  }
} //FIN DE LA FUNCIÓN
