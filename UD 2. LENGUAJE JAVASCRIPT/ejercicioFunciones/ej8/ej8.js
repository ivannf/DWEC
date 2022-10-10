let nombre = prompt("Introduce tu nombre");
let edad = parseInt(prompt("Introduce tu edad"));
let mayorEdad = (edad >= 18) ? "eres mayor de edad" :
"eres menor de edad";
let vivido = edad*365;

alert("Hola "+nombre+", "+mayorEdad+" y has vivido "+vivido+" dias");
