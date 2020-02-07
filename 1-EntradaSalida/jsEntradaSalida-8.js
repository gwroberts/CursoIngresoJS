/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    //declaramos variables
    var dividendoingresado;
    var divisoringresado;
    var dividendoparseado;
    var divisorparseado;
    var resto;
    

    //ingresamos datos
    dividendoingresado = document.getElementById ("numeroDividendo").value;
    divisoringresado = document.getElementById ("numeroDivisor").value;
    //parseo de datos
    dividendoparseado = parseInt (dividendoingresado);
    divisorparseado = parseInt (divisoringresado);
     //operacion matematica
     resto = dividendoparseado % divisorparseado;

    alert ("El resto es " + resto);


}  

