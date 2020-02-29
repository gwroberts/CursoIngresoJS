

function mostrar()
{
var nombreDeAnimal;
var pesoAnimal;
var temperaturaHabitad;
var respuesta="true";
var contadorPar=0;   
var contador=0;
var pesoMax=0;
var tempMasPesado;
var animalMaspesado;
var contadorInvernales=0;   
var pesoPromedio;
var acumuladorPeso=0;
var pesoInvernales;
var pesoMax;
var pesoMin;

while(respuesta)
    {
       contador=contador+1;
        nombreDeAnimal=prompt("Ingrese el nombre del animal");
       while(!isNaN(nombreDeAnimal))
         {
           nombreDeAnimal=prompt("Error,ingrese denuevo el nombre");
         }
         pesoAnimal=prompt("Ingrese el peso del animal");
         pesoAnimal=parseInt(pesoAnimal);
         while(isNaN(pesoAnimal)&&pesoAnimal<0||pesoAnimal>1000)
         {
          pesoAnimal=prompt("Error, ingrese el peso nuevamente");
          pesoAnimal=parseInt(pesoAnimal)   
         }
         temperaturaHabitad=prompt("Ingrese la temperatura del habitat");
         temperaturaHabitad=parseInt(temperaturaHabitad);
         while (isNaN (temperaturaHabitad)&&temperaturaHabitad<-30||temperaturaHabitad>30)
         {
             temperaturaHabitad=prompt("Error, ingrese la temperatura del habitad nuevamente");
             temperaturaHabitad=parseInt(temperaturaHabitad);
         }
         if (temperaturaHabitad%2==0)   //temperaturas pares
         { 
         contadorPar=contadorPar+1;
         }
        if (contador==1||pesoMax<pesoAnimal)   //busco el animal mas pesado
        {   pesoMax=pesoAnimal;
            animalMaspesado=nombreDeAnimal;
            tempMasPesado=temperaturaHabitad;
        }
        if(contador==1||temperaturaHabitad<0)    //cantidad de animales a mesno 0 grados
        {
            contadorInvernales=contadorInvernales+1;
            pesoMax=pesoAnimal;
            pesoMin=pesoAnimal;
        }else if (pesoAnimal>pesoMax)   //busco el peso maximo
            {
                pesoMax=pesoAnimal;
            
            }else if (pesoAnimal<pesoMin)   //busco el peso minimo
                {
                    pesoMin=pesoAnimal;
                }
        
        acumuladorPeso=acumuladorPeso+pesoAnimal
        
         respuesta=confirm("desea seguir cargando datos?");
    }

    pesoPromedio=acumuladorPeso/contador;

alert("peso promedio es:"+pesoPromedio)
alert("las temperaturas pares son:"+contadorPar)
alert("el animal mas pesado es:"+animalMaspesado+"su temperatura es:"+tempMasPesado)
alert("los animales q viven bajo cero son:"+contadorInvernales)
alert("el peso maximo es"+pesoMax+"el peso minimo es "+pesoMin);

}
