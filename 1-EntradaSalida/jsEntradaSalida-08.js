/*
Rosana Peralta
e/s 08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
	let dividiendo = document.getElementById('txtIdNumeroDividendo').value;
	let divisor = document.getElementById('txtIdNumeroDivisor').value;
	alert(`El resto es: ${dividiendo % divisor}`);
};
