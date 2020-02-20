function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var promedio;
	while (contador < 5) {
		contador = contador + 1;
		var numero = prompt("Ingrese un Numero");
		//validamos
		numero = parseInt(numero);
		
		while (isNaN (numero)){
			numero = prompt("Ingrese un Numero");
				numero = parseInt (numero);
		}		
			//acumulamos
			acumulador = acumulador + numero;
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN