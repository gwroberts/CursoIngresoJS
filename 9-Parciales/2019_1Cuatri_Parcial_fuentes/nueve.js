

function mostrar()
{
var peso;
var temperatura;
var marca;
var respuesta="true";
var contadorTemperatura=0;
var marcaPesado;
var productoMasPesado;
var contadorFrio=0;  
var promedioPeso;  
var contador=0;
var acumuladorPeso=0;   
var pesoMax;
var pesoMin;   
    while (respuesta)
    {
        contador=contador+1;
       marca=prompt("Ingrese la marca");                        
       while(marca=="")
        {
            marca=prompt("Error, ingrese una marca valida");
        }
       
       peso=prompt("ingrese el peso");
       peso=parseInt(peso);
       while (isNaN(peso) && peso<=0 || peso>101)   //valido el peso con valores 1 a 100
       {
           peso=prompt("Error,ingrese el peso nuevamente");
           peso=parseInt(peso);
          
          
        }
                temperatura=prompt("Ingrese temperatura");
                temperatura=parseInt(temperatura);
            while(isNaN(temperatura) && temperatura<-30 || temperatura>30)  //valido la temperatura -30/+30
           {
                temperatura=prompt("Error,ingrese la temperatura nuevamente");
                temperatura=parseInt(temperatura);
            
               
    
            } 

                //punto A
            if(temperatura % 2 == 0)
             { 
                contadorTemperatura=contadorTemperatura+1;
             }
   
             //punto B
             if (peso>productoMasPesado)
             {
                 productoMasPesado=peso;
                 marcaPesado=marca;
             }

             //punto C
             if (temperatura<0)
             {
                 contadorFrio=contadorFrio+1;

             }


               //punto D
            acumuladorPeso=acumuladorPeso+peso;
            
            
            if(contador != 0)                                          //me fijo que el contador no sea 0,es mucho muy importante                 
            { 
                promedioPeso=acumuladorPeso/contador; 
            }else{
                promedioPeso=0;
            }    

                //punto F
             if (pesoMax<peso)
             {
                 pesoMax=peso;
             
             }else if (pesoMin<peso)
                    {
                     pesoMin=peso;   
                    }   

        respuesta=confirm("desea ingresar mas datos?");
    }

   

document.write("la cantidad de temperaturas pares" +contadorTemperatura+"<br>" );
document.write("el producto mas pesado es :"+marcaPesado+productoMasPesado+"<br>");
document.write("La cantidad de productos refrigerados bajo cero es"+contadorFrio+"<br>");
document.write("el promedio de peso es "+promedioPeso+"<br>");
document.write("el peso maximo es "+pesoMax+"<br>");
document.write("el peso minimo es"+pesoMin+"<br>");

}

