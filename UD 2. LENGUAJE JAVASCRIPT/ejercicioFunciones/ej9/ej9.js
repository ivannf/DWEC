let numero = parseInt(prompt("Introduce el numero"))

/*if(numero <= 0 || numero >= 100){
    alert("El numero no es valido")
}else if(numero > 0 && numero < 10){
    alert("El numero es de un digito")
}else if(numero > 9 && numero < 100){
    alert("El numero es de dos digitos")
}*/

let mensaje = (numero > 0 && numero < 10) ? "El numero es de un digito" :
(numero > 9 && numero < 100) ? "El numero es de dos digitos" : 
"El numero no es valido";

alert(mensaje);