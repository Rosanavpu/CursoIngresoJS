function mostrar() {
	var n = prompt('Dame un número');
	for (i = 1; i <= n; i++) {
		if (n % i == 0) {
			document.write(i + ' ');
		}
	}
} //FIN DE LA FUNCIÓN
