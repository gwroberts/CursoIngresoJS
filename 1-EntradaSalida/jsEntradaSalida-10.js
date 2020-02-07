/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    //declarovariables
    var importeingresado;
    var importeparseado;
    var monto;
    var descuento;

    //ingreso de datos
    importeingresado = document.getElementById ("importe").value;
    //parseo de datos
    importeparseado = parseInt (importeingresado);
    //sacamos el descuento del 25%
   descuento = 0.25;
   
    monto = importeparseado * descuento;

    document.getElementById ("resultado").value = monto;
    

}
