function mostrar()
{
//tomo la edad  
var edad;
var condicion1;
var condicion2;


edad = document.getElementById("edad").value;
condicion1 = 13;
condicion2 = 17;

//verifico si es mayor de edad
    if (edad > condicion2) {
        alert ("sos mayor");
        
        //si es menor de 17 años
    
     } else {
            if (edad >
             condicion1){
                alert ("es adolescente");

             }     else {
                 alert ("es menor");

                     }
     }


}//FIN DE LA FUNCIÓN