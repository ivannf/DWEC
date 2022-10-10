let num1 = parseInt(prompt("Introduce el primer numero"));
let num2 = parseInt(prompt("Introduce el segundo numero"));
let num3 = parseInt(prompt("Introduce el tercer numero"));

if(num1 == num2 && num2 == num3){
    let suma = num1+num2;
    let producto = suma*num3;

    alert(producto)
}else{
    alert("Los numeros introducido no es valido")
}