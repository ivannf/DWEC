let dia = parseInt(prompt("Introduce el dia"));
let mes = prompt("Introduce el mes");
let anho = prompt("Introduce el año");

/*if(dia >= 25 && dia < 32 && mes == "Diciembre" || dia < 7 && dia > 0 && mes == "Enero" ){
    alert("Usted esta en la navidad del año "+anho)
}else{
    alert("Lo sentimos todavia no es navidad")
}*/

let mensaje = (dia >= 25 && dia < 32 && mes == "Diciembre" 
|| dia < 7 && dia > 0 && mes == "Enero" ) ? "Usted esta en la navidad del año "+anho :
"Lo sentimos todavia no es navidad";

alert(mensaje);
