function mostrar()
{
var letra;
var numero;
var respuesta="true";
var contador=0;
var contadorPar=0;
var contadorImpar=0;    
var contadorCero=0;    
var positivos=0;
var negativos=0;
var letraMax;
var numeroMax;
var letraMin;
var numeroMinss;
    while(respuesta)
    {   
        contador=contador+1
        letra=prompt("Ingrese una letra");
        while(letra=="")                                 //valido el string vacio(Enter sin escribir nada, pide denuevo)   
        {
            letra=prompt("Error, ingrese una letra nuevamente");
        }
        numero=prompt("ingrese el numero");
        numero=parseInt(numero);
      while(isNaN(numero)&& numero<-100 ||numero>100)
      {
          numero=prompt("Error, ingrese el numero nuevamente");
          numero=parseInt(numero);
      }                             //termino la validacion
      //calculamos los numeros pares
        if(numero%2==0)
        {
            contadorPar=contadorPar+1;

        }else if(numero%2==1)           //calculo los numeros impares
            {
                contadorImpar=contadorImpar+1;
            }else                                  //calculo los ceros ingresados 
                {
                    contadorCero=contadorCero+1;
                }

                if (numero>0)                   //calculo los positivos
                {
                    positivos=positivos+numero;
                }else if(numero<0)                  //calculo los negativos
                {
                    negativos=negativos+numero;
                }

          if (numero>numeroMax)                 //calculo maximo y letra
          {
              numeroMax=numero;
              letraMax=letra;
          } else if (numero<numeroMin)              //calculo minimo y letra
                {
                    numeroMin=numero;
                    letraMin=letra;
                }    
     
     
     
     respuesta=confirm("Desea continuar?"); 
    }




alert("numero minimo y su letra" +numeroMin+letraMin);
alert("numero maximo y su letra"+numeroMax+letraMax);
alert("impares"+contadorImpar );
alert("positivos"+positivos );
alert("negativos"+negativos);


}



