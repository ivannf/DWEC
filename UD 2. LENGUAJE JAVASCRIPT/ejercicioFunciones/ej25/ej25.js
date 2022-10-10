const element = document.getElementById("submit");
element.addEventListener("click",ej25);

function ej25(){
    let texto = document.getElementById("texto").value;
    let array = texto.split(" ");

    let numPalabras = array.length;
    let primeraPalabra = array[0];
    let ultimaPalabra = array.pop();
    let parrafo = document.getElementById("parrafo");

    parrafo.innerHTML = "El numero de palabra es: "+numPalabras+"<br>"+"La primera palabra es: "+primeraPalabra+"<br>"+
    "La ultima palabra es: "+ultimaPalabra;
}