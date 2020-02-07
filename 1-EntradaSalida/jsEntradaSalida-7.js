/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    //declaramos variables
   var numero1ingresado;
   var numero2ingresado;
   var numero1parseado;
   var numero2parseado;
   var suma;
   var resta;
   var division;
   var multiplicacion;

   // ingreso los datos por ID
   numero1ingresado = document.getElementById ("numeroUno").value;
   numero2ingresado = document.getElementById ("numeroDos").value;
   // parseamos los datos
    numero1parseado = parseInt (numero1ingresado);
    numero2parseado = parseInt (numero2ingresado);

    //operacion suma

    suma = numero1parseado + numero2parseado ;

    //mostramos resultado
    alert ("la suma es " + suma);

    // operacion resta
    resta = numero1parseado - numero2parseado;

    //mostramos resultado
    alert ("La resta es " + resta);

    //dividimos
    division = numero1parseado / numero2parseado;

    //mostramos
    alert ("La division es " + division);

    //multiplicamos
    multiplicacion = numero1parseado * numero2parseado;

    //mostramos resultado
    alert ("la multiplicacion es " + multiplicacion)

}

function restar()
{
	
}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

