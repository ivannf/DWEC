let dia = parseInt(prompt("Introduce el dia de tu nacimiento"));
let mes = prompt("Introduce el mes de tu nacimiento");
let mensaje = (dia >= 21 && mes == "Marzo")||(dia <= 20 && mes == "Abril") ? "Aries" :
(dia >= 21 && mes == "Abril")||(dia <= 21 && mes == "Mayo") ? "Tauro" :
(dia >= 22 && mes == "Mayo")||(dia <= 21 && mes == "Junio") ? "Géminis" :
(dia >= 21 && mes == "Junio")||(dia <= 23 && mes == "Julio") ? "Cáncer" :
(dia >= 24 && mes == "Julio")||(dia <= 23 && mes == "Agosto") ? "Leo" :
(dia >= 24 && mes == "Agosto")||(dia <= 23 && mes == "Septiembre") ? "Virgo" :
(dia >= 24 && mes == "Septiembre")||(dia <= 23 && mes == "Octubre") ? "Libra" :
(dia >= 24 && mes == "Octubre")||(dia <= 22 && mes == "Noviembre") ? "Escorpio" :
(dia >= 23 && mes == "Noviembre")||(dia <= 21 && mes == "Diciembre") ? "Sagitario" :
(dia >= 22 && mes == "Diciembre")||(dia <= 20 && mes == "Enero") ? "Capricornio" :
(dia >= 21 && mes == "Enero")||(dia <= 19 && mes == "Febrero") ? "Acuario" :
"Piscis";

alert(mensaje);
