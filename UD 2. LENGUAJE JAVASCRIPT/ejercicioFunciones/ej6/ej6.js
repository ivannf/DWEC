let numero1 = parseInt(prompt("Introduce el primero número"));
let numero2 = parseInt(prompt("Introduce el segundo número"));
let numero3 = parseInt(prompt("Introduce el tercer número"));

/*if(numero1 > numero2 && numero1 > numero3){
    alert("El primer numero es el mayor");
}else if(numero2 > numero1 && numero2 > numero3){
    alert("El segundo numero es el mayor");
}else{
    alert("El tercer numero es el mayor");
}*/

let mensaje = (numero1 > numero2 && numero1 > numero3) ? "El primer numero es el mayor" :
(numero2 > numero1 && numero2 > numero3) ? "El segundo numero es el mayor" :
"El tercer numero es el mayor";

alert(mensaje);
