function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';
	var bandera;
	var acumulador = prompt("Ingrese un numero");

	while (respuesta == "si") {
		contador = contador + 1;
		var numero;
		numero = parseInt(numero);
			if (numero == null){
				
			}

		while (isNaN (numero)) {
				numero = prompt ("Error ingrese el numero nuevamente");
				numero = parseInt (numero);

					respuesta = confirm ("desea continuar?");
					
		}
		
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN