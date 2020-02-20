function mostrar()
{

var clave = prompt("ingrese el número clave.");
var contador = 0;
    
    while (clave.toLowerCase()  != "utn750"){
       contador = contador +1;
        var clave = prompt("Error ingrese el número clave.");
        if (contador == 3){
            break;
        }
    
    }
    
    if (contador == 3){
          alert ("intentaste demasiadas veces, intentalo mas tarde");
             
        }else{
        alert ("bienvenido");    
        }
    
}//FIN DE LA FUNCIÓN
