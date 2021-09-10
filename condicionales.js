/*
let edad = prompt(`¿Cual es tu edad?`);

if (edad >= 18){
    document.write(`Tienes ${edad} y eres mayor de edad`);
}  else if (edad){
    document.write(`Tienes ${edad} y aun eres menor de edad`);
}
*/


let edad = prompt(`¿Cual es tu edad querido usuario?`);

if( edad >= 18 && edad <= 29){
    document.write(`Felicidades has sido aceptado en el bootcamp de Generation`)
} else {
    document.write(`No cumples con los requisitos del programa`);
}

