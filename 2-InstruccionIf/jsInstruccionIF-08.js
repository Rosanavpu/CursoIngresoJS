function mostrar()
{
	var edadIngresada = txtIdEdad.value;
	var select = document.getElementById('estadoCivil');
	var estadoCivil = select.options[select.selectedIndex].value;
	if(edadIngresada < 18 && estadoCivil !== 'Soltero') return;
	alert('Es soltero y no es menor')

}//FIN DE LA FUNCIÓN