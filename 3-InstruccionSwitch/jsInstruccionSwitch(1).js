function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
    case "Enero" : 
        alert (" Que comiences bien el año ");
        break;
    case "Marzo":
        alert (" A clases ");
        break;
    case "Julio":
        alert ("Se vienen las vacaciones");
        break;
    case "Diciembre":
        alert ("Felices fiestas");
        break;
    // caso que no es ninguna de las anteriores
    default :
        alert ("No hay un evento reconocido en este");
        break;
}

//ejemplo de uso con if  
    // if (mesDelAño == "enero"){
        // alert ("que comiences bien el año");
        //else

        // if (mesDelAño == "Marzo")...etc
    }

}//FIN DE LA FUNCIÓN