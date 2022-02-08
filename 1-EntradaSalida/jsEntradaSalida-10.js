/*
Rosana Peralta
e/s 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
  let aumento;
  let sueldo = document.getElementById("txtIdImporte").value;
  let porcentaje = prompt("Ingrese el porcentaje");
  aumento = parseInt(sueldo);
  numeroPorcentaje = parseInt(porcentaje) / 100;
  aumento += aumento * numeroPorcentaje;
  document.getElementById("txtIdResultado").value = aumento;
}
