/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    
    // declaramos variables
    var numero1Ingresado;
    var numero2Ingresado;
    var numero1Parseado;
    var numero2Parseado;
    var suma;
    
    // Ingresamos los numeros por id
    numero1Ingresado = document.getElementById ("numeroUno").value ;
    numero2Ingresado = document.getElementById("numeroDos").value ;
    
    //convertir los datos en numero (parseo)
    numero1Parseado = parseInt (numero1Ingresado) ;
    numero2Parseado = parseInt (numero2Ingresado) ;


    // Operacion

    suma = numero1Parseado + numero2Parseado ;
    
    // Mostramos resultado en pantalla
    alert ("la suma es " + suma) ;
    

}

