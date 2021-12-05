function mostrar() {
  var estacionIngresada = txtIdEstacion.value;
  var destino = txtIdDestino.value;
  switch (estacionIngresada) {
    case "Invierno":
      if (destino === "Bariloche") return alert("Se viaja!");
      alert("No se viaja");
      break;
    case "Verano":
      if (destino === "Mar del plata" || destino === "Cataratas")return alert("Se viaja!");
		alert("No se viaja");
      break;
    case "Primavera":
      if (destino !== "Bariloche") return alert("Se viaja!");
	  alert('No se viaja')
      break;
    default:
      alert("Se viaja!");
      break;
  }
} //FIN DE LA FUNCIÓN
