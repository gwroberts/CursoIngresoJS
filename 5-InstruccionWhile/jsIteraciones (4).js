function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	
	while ( numero > 9|| numero < 0 || isNaN (numero)) { // valido cuando ingreso una palabra, isNaN hace que NaN == NaN y permita que no entre palabras
			var numero = prompt(" error ingrese un número entre 0 y 10.");

	}
	document.getElementById ( "Numero"). value	= numero;





}//FIN DE LA FUNCIÓN
