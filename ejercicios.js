
/*
function mostrarNombre( nombreIngresado ){
    document.write("Hola " + nombreIngresado + " saludos desde javascript");
}

mostrarNombre( prompt("Hola Usuario ¿Me puedes decir tu nombre?") );
*/

//crear funcion de Operaciones
function operacionesBasicas(primerNumero, segundoNumero){
    
    // Operaciones
    let suma = primerNumero + segundoNumero;
    let resta = primerNumero - segundoNumero ;
    let division = primerNumero / segundoNumero;
    let multiplicacion = primerNumero * segundoNumero;
    
    //Escribirlos en el Documento
    //<br> es Salto de Linea en HTML
    document.write("Los resultados son: <br>" + 
                    "Suma = " + suma + "<br>" +
                    "Resta = " + resta + "<br>" +
                    "Multiplicacion = " + multiplicacion + "<br>" +
                    "Division = " + division + "<br>");
}

//Ingresar los dos numeros
//Parsealos desde que se piden para que sean Numeros
let numero1 = parseInt( prompt("Ingresa el primer numero") );
let numero2 = parseInt( prompt("Ingresa el segundo numero") );

//lamar la funcion
operacionesBasicas(numero1, numero2);