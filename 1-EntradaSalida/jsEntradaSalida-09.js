/*
Rosana Peralta
e/s 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
  let aumento;
  let sueldo = document.getElementById("txtIdSueldo").value;
  let porcentaje = prompt("Ingrese el porcentaje");
  aumento = parseInt(sueldo);
  numeroPorcentaje = parseInt(porcentaje) / 100;
  aumento += aumento * numeroPorcentaje;
  document.getElementById("txtIdResultado").value = aumento;
}
