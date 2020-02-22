function mostrar() {

	//1 inicializo el contador para empezar el while
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var acumulador=0;
	var contador=0;
	var acumulador=0;
	var sumaNegativo=0;
	var sumaPositivos=0;
	var contadorCeros=0;
	var contadorNegativo=0;
	var contadorPositivo=0;
	var contadorPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPN;
	respuesta="si";
	while (respuesta == "si"){
		contador=contador+1;
		numeroIngresado = prompt ("ingresel el " +contador+ "º numero : ");
		numeroIngresado=parseInt (numeroIngresado);
		while (isNaN (numeroIngresado)){
			numeroIngresado=prompt("error, ingrese un numero ");
			numeroIngresado=parseInt (numeroIngresado);
		} //termino la validacion de datos con el segundo while
		
			if (numeroIngresado<0){		//ingreso numeros negativos
				sumaNegativo=sumaNegativo+numeroIngresado;//acumulo negativos
				contadorNegativo=contadorNegativo+1;//cuento cantidad de negativos
			} else if(numeroIngresado>0){	//ingreso numeros positivos
				sumaPositivos=sumaPositivos+numeroIngresado;//acumulo numeros positivos
				contadorPositivo=contadorPositivo+1;//cuento la cantidad de numeros positivos
				} else{
				contadorCeros=contadorCeros+1;//cuento la cantidad de ceros ingresados
				  } 
				  	if(numeroIngresado%2==0){//cuento la cantidad de numeros pares
						contadorPares=contadorPares+1;
						
					}	
					  
		
		
		
				  acumulador=acumulador+numeroIngresado;
		
			respuesta =prompt ("desea continuar?");
	} 	
	
	promedioPositivos=sumaPositivos/contadorPositivo;
	promedioNegativos=sumaNegativo/contadorNegativo;
	diferenciaPN=sumaPositivos+sumaNegativo;

document.write ("La suma de los numeros negativos ingresados es: <br> "+sumaNegativo );
document.write ("La suma de los numeros positivos ingresados es:<br> "+sumaPositivos);
document.write ("La cantidad de numeros positivos ingresados es: <br>"+contadorPositivo);
document.write ("La cantidad de numeros negativos ingresados es:<br> "+contadorNegativo);
document.write ("La cantidad de elementos neutros ingresados es: <br>"+contadorCeros);
document.write ("La cantidad de numeros pares ingresados es: <br>"+contadorPares);
document.write ("El promedio de los numeros positivos ingresados es: <br>"+promedioPositovos);
document.write ("El promedio de los numeros negativos ingresados es: <br>"+promedioNegativos);
document.write ("La diferencia entre los numeros positivos y negativos ingresados es: <br>"+diferenciaPN);
}//FIN DE LA FUNCIÓN