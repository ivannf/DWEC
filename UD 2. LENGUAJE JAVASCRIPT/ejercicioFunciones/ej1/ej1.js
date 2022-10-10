const element = document.getElementById("submit");
element.addEventListener("click", ejemplo2);

/*function ej1() {
    let texto1 = parseInt(document.getElementById("texto1").value);
    let texto2 = parseInt(document.getElementById("texto2").value);

    if(texto1>texto2){
        alert("El primer número es mayor que el segundo");
    }else if(texto2>texto1){
        alert("El segundo número es mayor que el primero");
    }else if(texto1=texto2){
        alert("Los números son iguales");
    }
}*/

function ejemplo2() {
    let texto1 = parseInt(document.getElementById("texto1").value);
    let texto2 = parseInt(document.getElementById("texto2").value);
    let mensaje = (texto1>texto2) ? "El primer número es mayor que el segundo" :
    (texto2>texto1) ? "El segundo número es mayor que el primero" :
    "Los números son iguales";
    
    alert(mensaje);
}