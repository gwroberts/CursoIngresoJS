function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch (mesDelAño)
    {
        case ("Febrero"):
            alert ("este mes tiene 28 dias");
            break;
        case ("Enero"):
            alert ("este mes tiene 31 dias");
            break;
        case ("Marzo"):
            alert ("este mes tiene 31 dias");
            break;
        case ("Mayo"):
            alert ("este mes tiene 31 dias");
            break;
        case ("Julio"):
            alert ("este mes tiene 31 dias");
            break;
        case ("Agosto"):
            alert ("este mes tiene 31 dias");
            break;
        case ("Octubre"):
            alert ("este mes tiene 31 dias");
            break;
        case ("Diciembre"):
            alert ("este mes tiene 31 dias");
            break;
        default:
            alert ("este mes tiene 30 dias");
           break 
    }
	



}//FIN DE LA FUNCIÓN