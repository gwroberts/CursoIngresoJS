// gestion de un hotel
//ingresar los datos:
//nombre de huespede,cantidad de personas,cantidad de estadias x dia.
//forma de pago (efec.tarjeta. qr)
//informar el huesped que trajo mas personas en una sola reserva.
//A la cantidad de personas que se quedaron mas dias.
//B la forma de pago mas utilizada.
//C el promedio de la cantidad de dias x reserva.


function mostrar()
{
var nombre;
var cantidadDePersonas;
var cantidadDeDias;
var formaDePago;
var respuesta="true";
var maximoPersonas;
var contadorRerservas=0;
var acumuladorReservas=0;
var maximoPersonasHuesped;
var maximoDeDias;
var maximoDeDiasCantidad;
var contadorQr=0;
var contadorEfec=0;
var contadorTar=0;
var acumuladorFormaDePago=0;
while(respuesta)
    {
        contadorRerservas=contadorRerservas+1;
        nombre=prompt("ingrese nombre");
        while(!isNaN(nombre))
        {
        nombre=prompt("ingrese nombre");
        }
        cantidadDePersonas=prompt(cantidadDePersonas);
        cantidadDePersonas=parseInt(cantidadDePersonas);
        while(isNaN(cantidadDePersonas)||cantidadDePersonas>0)
           {
            cantidadDePersonas=prompt(cantidadDePersonas);
            cantidadDePersonas=parseInt(cantidadDePersonas);
           } 
           while(isNaN(cantidadDeDias)||cantidadDeDias>0)
           {
            cantidadDeDias=prompt(cantidadDeDias);
            cantidadDeDias=parseInt(cantidadDeDias);
           }    
           formaDePago=prompt(formaDePago);
            formaDePago=parseInt(formaDePago);
           
           while(!isNaN(formaDePago)||formaDePago!="efectivo"&&formaDePago!="qr"&&formaDePago!="tarjeta")
           {
            formaDePago=prompt(formaDePago);
            formaDePago=parseInt(formaDePago);
           }           
           acumuladorReservas=acumuladorReservas+cantidadDeDias
           if(contadorRerservas==1||cantidadDePersonas>maximoPersonas)
           {
               maximoPersonas=cantidadDePersonas;
               maximoPersonasHuesped=nombre; 
            }
            if (contadorRerservas==1||cantidadDeDias>0)
             {    
                maximoDeDias=maximoDeDias+cantidadDeDias;
             }      
          switch (formaDePago) 
            {
             case "efectivo":
                contadorEfec=contadorEfec+1;
                break;
             case "qr":
                 contadorQr=contadorQr+1;
                break;
             default  :    
                contadorTar=contadorTar+1;
                break;
            }

       respuesta=confirm("desea continuar?");    

        }
        promedio=acumuladorReservas/contador;

          if (contadorEfec>contadorQr&&contadorEfec>contadorTar)
          {
              formaDePagoMasUtilizada="efectivo";
          } else if (contadorQr>contadorTar)
                {
                  formaDePagoMasUtilizada="qr";  
                }else
                    {
                        formaDePagoMasUtilizada="tarjeta";
                    }
document.write("la cantidad de personas que se quedaron mas dias es: "+maximoPersonas+"<Br>");
document.write("el promedio de dias x reserva es: "+promedio+"<Br>");
document.write("el metodo de pago mas utilizado es: "+formaDePagoMasUtilizada+"<Br>");


    }
