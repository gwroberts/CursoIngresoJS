/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var colorSecreto;
var tiempoInicio;
function comenzar()
{
var colorElegido;
var random;
var min=1;
var max=7;
tiempoInicio=new Date();

random= Math.floor(Math.random()*(max-min))+min;


switch(random){
    case 1:
        colorSecreto="azul";
        break;
    case 2:
        colorSecreto="amarillo";
        break;
    case 3:
        colorSecreto="marron";
        break;
    case 4:
        colorSecreto= "verde";
        break;
    case 5:
        colorSecreto="celeste";
        break;
    case 6:
        colorSecreto="rojo";
        break;


}


document.getElementById(colorElegido).value = colorSecreto ;

	

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
var tiempoFinal;
var tiempoTotal;
	
tiempoFinal=0;    
    tiempoTotal=tiempoFinal-tiempoInicio;
    tiempoTotal=tiempoTotal/1000;
    
    if (colorParametro==colorSecreto){
        
        alert("gano y tardo:"+tiempoTotal+"segundos");
        



    }
	


}//FIN DE LA FUNCIÓN
