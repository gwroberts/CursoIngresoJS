function mostrar() {

	var contador = 0;
	// declarar variables
	var numero;
	var respuesta = 'si';
	var maximo;
	var minimo;
	var primeraIteracion = true;
	while (respuesta) {
		numero = prompt(" ingrese un numero");					//valido datos que se ingresan con los 2 while
		numero = parseInt(numero);
		while (isNaN(numero)) {
			numero = prompt("Error, ingrese un numero ");
			numero = parseInt(numero);
		}	//cierro while de validacion
		// opero
		if (primeraIteracion) {   //es para que la primera iteracion carga como maximo y minimo porque no puedo inicializarlo
			primeraIteracion = false;
			minimo = numero;
			maximo = numero;
			contador = contador + 1;
		} else {


			if (numero >= maximo) {
				maximo = numero;
			} else {
				if (numero <= minimo) {
					minimo = numero;

				}
			}
		}



		respuesta = confirm("desea continuar?");

	}// cierro llave del while respuesta


	document.getElementById('maximo').value =maximo;
	document.getElementById('minimo').value = minimo;

}//FIN DE LA FUNCIÓN