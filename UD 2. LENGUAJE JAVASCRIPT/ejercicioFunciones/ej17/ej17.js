let nombre = prompt("Introduce el nombre");
let cantidadPreguntas = parseInt(prompt("Cantidad de preguntas"));
let respuestasCorrectas = parseInt(prompt("Cantidad de respuestas correctas"));
let resultado = respuestasCorrectas*100/cantidadPreguntas;

let mensaje = (resultado<50) ? "Fuera de nivel" :
(resultado >= 50 && resultado < 75) ? "Nivel bajo" :
(resultado >= 75 && resultado < 90) ? "Nivel medio" :
(resultado >= 90) ? "Nivel alto" :
"Mal introducido";

alert(mensaje);