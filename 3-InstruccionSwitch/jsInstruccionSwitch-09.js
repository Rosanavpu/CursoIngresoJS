function mostrar() {
  var estacionIngresada = txtIdEstacion.value;
  var destino = txtIdDestino.value;
  var precioBase = 15000;
  switch (estacionIngresada) {
    case "Invierno":
      if (destino === "Bariloche") {
        return alert(precioBase * 1.2);
      } else if (destino === "Cataratas" || destino === "Cordoba") {
        return alert(precioBase * 0.9);
      } else return alert(precioBase * 0.8);
    case "Verano":
      if (destino === "Bariloche") {
        return alert(precioBase * 0.8);
      } else if (destino === "Cataratas" || destino === "Cordoba") {
        return alert(precioBase * 1.1);
      } else return alert(precioBase * 1.2);
    case "Otoño":
    case "Primavera":
      if (
        destino === "Bariloche" ||
        destino === "Cataratas" ||
        destino === "Mar del plata"
      ) {
        return alert(precioBase * 1.1);
      } else return alert(precioBase);
    default:
      break;
  }
} //FIN DE LA FUNCIÓN
