let sueldo = parseInt(prompt("Introduce el sueldo"));
let antiguedad = parseInt(prompt("Introduce la antiguedad"));

if(sueldo<1000 && antiguedad >= 10){
    let porcentaje= (sueldo*20)/100;
    let sueldoFinal = sueldo+porcentaje;
    alert("Sueldo final "+sueldoFinal);
}else if(sueldo<1000 && antiguedad < 10){
    let porcentaje = (sueldo*5)/100;
    let sueldoFinal = sueldo+porcentaje;
    alert("Sueldo final "+sueldoFinal);
}else{
    alert("Sueldo final "+sueldo)
}