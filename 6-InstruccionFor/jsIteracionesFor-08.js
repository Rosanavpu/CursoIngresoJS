function mostrar() {
	var num = prompt('Dame un número: ');
	var raizCuadrada = Math.sqrt(num);
	var esPrimo = true;
	for (var i = 2; i <= raizCuadrada; i++) {
		if (num % i == 0) {
			esPrimo = false;
			break;
		}
	}
	if (esPrimo) {
		alert('Es un número primo ' + num);
	} else {
		alert('No es un número primo ' + num);
	}
} //FIN DE LA FUNCIÓN
