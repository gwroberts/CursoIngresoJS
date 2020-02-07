/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    // declaro variables
    var sueldoingresado;
    var resultado;
    var sueldoparseado;
    var multiplicacion;
    var division;
    var porcentaje
    var divisor
    //ingreso de datos
    sueldoingresado = document.getElementById ("sueldo").value;
    //parseo de dato
    sueldoparseado = parseInt (sueldoingresado);
    //operacion matematica
     
    var porcentaje = 10;
    multiplicacion = sueldoparseado * porcentaje;
    var divisor = 100;
    division = multiplicacion / divisor;

    alert ("resultado es " + divisor);
    




    
}
