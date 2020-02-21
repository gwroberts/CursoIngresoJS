function mostrar() {

	var contador = 0;
	//declarar contadores y variables 
	var numero;
	var respuesta = "si";
	var sumanegativos;
	var sumapositivos;
	var cantidadpositivos=0;
	var cantidadceros=0;
	var cantidadnegativos=0;
	var cantidadpares =0;
	var promediopositivos;
	while (respuesta) {															//do while cuaderno
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);
		while (isNaN(numero)) {
			numero = parseInt(numero);
		}	//termino la validacion de datos.
		if (numero > 0) {
			sumapositivos = sumapositivos + numero;
			cantidadpositivos = cantidadpositivos +1;
			
		} else if (numero < 0) {
			sumanegativos = sumanegativos + numero;
			cantidadnegativos = cantidadnegativos +1;
		} else {
			cantidadceros = cantidadceros + 1;
			if (numero % 2 == 0){
				contidadpares =cantidadpares +1;
			}
			
		}	if (cantidadpositivos !=0){
			promediopositivos=sumapositivos/cantidadpositivos;
		}

			if (cantidadnegativos !=0){
				promedionegativos=sumanegativos/cantidadpositivos;
			}
		
			diferenciaentrepositivosynegativos=cantidadpositivos-cantidadnegativos;
		respuesta = confirm("desea continuar?");
	}//llave de cierre del while

	document.write ("1 La suma de los negativos es "+sumanegativos);
	cocument.write ("2 La suma de los positivos es  "+sumapositivos);
	document.write ("3 La cantidad de numeros positivos es "+cantidadpositivos);
	document.write ("4 La cantidad de negativos es "+cantidadnegativos);
	document.write ("5 La cantidad de ceros es	"+cantidadceros);
	document.write ("6 La cantidad de numeros pares es "+cantidadpares);
	document.write ("7 El promedio de positivos es "+promediopositivos);
	document.write ("8 El promedio de negativos es"+promedionegativos );
	document.write ("9La diferencia entre positivos y negativos es "+diferenciaentrepositivosynegativos);
	alert ("la cantidad de ceros ingresados es"  + cantidadceros );

}//FIN DE LA FUNCIÓN