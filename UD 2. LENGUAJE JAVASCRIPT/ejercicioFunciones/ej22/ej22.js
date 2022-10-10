let edad = parseInt(prompt("Introduce la edad"));
let altura = parseInt(prompt("Introduce la altura"));
let sexo = prompt("Introduce el sexo");

if(sexo == "Hombre"){
    let pesoIdeal= 50+((altura-150)/4)*3 + (edad-20)/4;
    alert("Su peso ideal es "+pesoIdeal+"kg")
}else{
    let pesoIdeal= 50+((altura-150)/4)*0.9 + (edad-20)/4;
    alert("Su peso ideal es "+pesoIdeal+"kg")
}
