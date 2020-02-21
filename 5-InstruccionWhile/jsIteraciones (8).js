function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero 
	var respuesta='si';
	while (respuesta){
	
		var numero = prompt ("ingrese un numero");
		numero = parseInt (numero);
		
		while(isNaN(numero)){
			numero = prompt ("Error numero incorrercto");	//valido el numero que se ingresa para poder operar
			numero = parseInt (numero);
		}	//cierro el while de la validacion
			//opero

		if (numero >=0){
			positivo = positivo + numero;

		}else{
			negativo = negativo *numero;
			contador = contador +1;//aca esta para saber si alguna vez hay un numero negativo, si queda en cero nunca se ejecuto esta linea
				
		}
		 respuesta = confirm ("desea continuar?");	
	}//cierro el while que contiene respuesta	 
			


	

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN