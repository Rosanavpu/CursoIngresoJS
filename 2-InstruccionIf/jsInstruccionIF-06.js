function mostrar()
{
	var edadIngresada = txtIdEdad.value;
	if(edadIngresada < 13) return alert('menor a 13 años')
	if(edadIngresada >= 18) return alert('18 años o más')
	return alert('adolescente')



}//FIN DE LA FUNCIÓN