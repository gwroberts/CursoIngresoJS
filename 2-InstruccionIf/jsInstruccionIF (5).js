function mostrar()
{
//tomo la edad  
var edad;
var condicion1;
var condicion2;
condicion1 = 13;
condicion2 = 17;

edad = document.getElementById("edad").value;
    if (edad < condicion1 || edad > condicion2){
        alert ("usted no es adolescente");

    }

}//FIN DE LA FUNCIÓN