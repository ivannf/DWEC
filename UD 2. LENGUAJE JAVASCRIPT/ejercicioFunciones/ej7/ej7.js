let numero = parseInt(prompt("Introduce el numero"));

/*if(numero > 0){
    alert("El numero es positivo");
}else if(numero == 0){
    alert("El numero es igual a cero")
}else{
    alert("El numero es negativo")
}*/

let mensaje = (numero > 0) ? "El numero es positivo" :
(numero == 0) ? "El numero es igual a cero" :
"El numero es negativo";

alert(mensaje);