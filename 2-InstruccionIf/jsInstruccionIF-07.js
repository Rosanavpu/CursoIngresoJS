function mostrar()
{
	//tomo la edad  
	var edadIngresada = txtIdEdad.value;
	var select = document.getElementById('estadoCivil');
	var estadoCivil = select.options[select.selectedIndex].value;
	if(edadIngresada < 18 && estadoCivil !== 'Soltero') return alert('Es muy pequeño para NO ser soltero')

}//FIN DE LA FUNCIÓN