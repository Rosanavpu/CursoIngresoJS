/* 
Rosana Peralta
e/s 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {
  let nombreIngresado;
  nombreIngresado = prompt('Ingrese un nombre: ');
  document.getElementById('txtIdNombre').value = 'Su nombre es ' + nombreIngresado;
}
