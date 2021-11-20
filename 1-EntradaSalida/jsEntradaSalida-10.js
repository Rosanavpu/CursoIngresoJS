/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	let aumento = parseInt(txtIdImporte.value)
	txtIdResultado.value = aumento * 0.75
}
