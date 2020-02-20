function mostrar()
{

var sexo = prompt("ingrese f ó m .");

    while (sexo.ToLowercase () != "f"  && sexo.toLocaleLowerCase () != "m" ){  // se usa && porque es distinta a las 2
        var sexo = prompt("Error,ingrese f ó m .");


        }


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN