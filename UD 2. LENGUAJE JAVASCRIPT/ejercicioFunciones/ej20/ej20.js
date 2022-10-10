let marca = prompt("Introduce la marca");
let modelo = prompt("Introduce el modelo");
let mensaje = (marca == "Renault") ? "Renault tiene un 15% de descuento" :
(marca == "Ford" && modelo == "Fiesta") ? "Ford y el modelo es Fiesta tiene un descuento del 7%" :
(marca == "Ford" && modelo == "Focus") ? "Ford y el modelo es Focus tiene un descuento del 10%" :
"Tiene un descuento del 5%";

alert(mensaje);

