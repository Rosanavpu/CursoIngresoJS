function mostrar()
{
	let numeroRandom = Math.floor(Math.random() * (10 - 1)) + 1;	
	if(numeroRandom >= 9) return alert('EXCELENTE');
	if(numeroRandom >= 4 && numeroRandom < 9)return alert('APROBÓ!');
	else return alert('Vamos, la proxima se puede')

}//FIN DE LA FUNCIÓN