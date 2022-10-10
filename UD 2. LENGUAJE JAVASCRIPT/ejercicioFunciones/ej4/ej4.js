const element = document.getElementById("submit");
element.addEventListener("click", ejemplo2);

/* function ej4(){
    let primerNumero = parseInt(document.getElementById("primerNumero").value);
    let segundoNumero = parseInt(document.getElementById("segundoNumero").value);

    if(primerNumero>segundoNumero){
        let suma = primerNumero+segundoNumero;
        let resta = primerNumero-segundoNumero;

        alert("La suma es "+suma+ " y la resta es "+resta)
    }else{
        let producto = primerNumero*segundoNumero;
        let division = primerNumero/segundoNumero;

        alert("El producto es "+producto+" y la division es "+division)
    }
} */

function ejemplo2(){
    let primerNumero = parseInt(document.getElementById("primerNumero").value);
    let segundoNumero = parseInt(document.getElementById("segundoNumero").value);
    let suma = primerNumero+segundoNumero;
    let resta = primerNumero-segundoNumero;
    let producto = primerNumero*segundoNumero;
    let division = primerNumero/segundoNumero;

    let mensaje = (primerNumero>segundoNumero) ? "La suma es "+suma+ " y la resta es "+resta :
    "El producto es "+producto+" y la division es "+division;

    alert(mensaje);

}
