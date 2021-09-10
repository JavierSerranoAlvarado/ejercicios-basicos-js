/* function sumar(num1, num2){
    let resultado = num1 + num2;
    console.log(resultado);
}

sumar(2,5);
*/

/*
INICIO
Solicitar 3 cantidades al usuario
Funcion determinar cual es el mayor

Camila acaba de comenzar su nuevo rol como Desarrolladora Java Junior en un banco. 
Ella está trabajando en cuentas de clientes para una nueva aplicación de banca móvil. 
Se le pide que implemente una función que muestre la cantidad mayor de tres cantidades 
en la pantalla de inicio.

Sala 13


*/
/*
let primerCantidad = prompt("Ingresa la primer cantidad");
let segundaCantidad = prompt("Ingresa la segunda cantidad");;
let terceraCantidad = prompt("Ingresa la tercera cantidad");;

function verMayor(uno,dos,tres){
    if(uno > dos && uno > tres) {
        document.write("La cantidad mayor es la primera $" + uno);
    } else if (dos > uno && dos > tres){
        document.write("La cantidad mayor es la segunda $" + dos);
    } else if (tres > uno && tres > dos) {
        document.write("La cantidad mayor es la tercera $" + tres)
    } else {
        document.write("La cantidad mayor son 2 repetidas o las 3 son iguales");
    }
}

verMayor(primerCantidad,segundaCantidad, terceraCantidad);

*/
function verMayor(num1, num2, num3){
    var numeros = []
    numeros.push(num1, num2, num3);
    
    numeros.sort();
    numeros.reverse();
    document.write("La cantidad mayor es $" + numeros[0]);
}

verMayor(prompt ("ingresa el primer numero") ,
        prompt ("El segundo"), 
        prompt ("Ell tercero") 
        );