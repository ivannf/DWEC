const element = document.getElementById("submit");
element.addEventListener("click", ej12);

let numero = document.getElementById("numero");


/*function ej12(){
    if(numero.value%2 == 0){
        alert("El numero es par")
    }else{
        alert("El numero es impar")
    }
}*/

function ej12(){

    let mensaje = (numero.value%2 == 0) ? "El numero es par" :
    "El numero es impar";
    
    alert(mensaje)
}


