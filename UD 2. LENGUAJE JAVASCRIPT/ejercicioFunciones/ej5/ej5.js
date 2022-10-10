let nota1 = parseInt(prompt("Ingrese la nota 1"));
let nota2 = parseInt(prompt("Ingrese la nota 2"));
let nota3 = parseInt(prompt("Ingrese la nota 3"));

let media = (nota1+nota2+nota3)/3;

/*if(media<5){
    alert("Repetidor")
}else if(media >= 5 && media < 7){
    alert("Superado")
}else if(media >=7){
    alert("Promocionado")
}*/

let mensaje = (media<5) ? "Repetidor" :
(media >= 5 && media < 7) ? "Superado" :
"Promocionado";

alert(mensaje);