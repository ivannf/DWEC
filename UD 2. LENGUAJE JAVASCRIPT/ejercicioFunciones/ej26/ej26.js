const elemento1 = document.getElementById("cargarEjemplo");
elemento1.addEventListener("click", cargarElemento);

let array = [63, 45, 58, 56];

function cargarElemento() {
    let texto = document.getElementById("texto");
    texto.value = array;
}

const elemento2 = document.getElementById("reiniciar");
elemento2.addEventListener("click", reiniciar);

function reiniciar() {
    let texto = document.getElementById("texto");
    texto.value = " ";

    let parrafo = document.getElementById("textoFinal");

    parrafo.innerHTML="";
}

const elemento3 = document.getElementById("calcular");
elemento3.addEventListener("click", calcular);

function calcular() {

    let texto = document.getElementById("texto");
    const arrayIntroducido = texto.value.split(",");

    let numMayor = Math.max(...arrayIntroducido);
    let numMenor = Math.min(...arrayIntroducido);

    var suma = 0;

    for (let i = 0; i < arrayIntroducido.length; i++) {

        suma += parseInt(arrayIntroducido[i]);

    }

    
    let media = suma / arrayIntroducido.length;

    let parrafo = document.getElementById("textoFinal");

    parrafo.innerHTML = "La suma es: "+suma+"<br>"+"La media: "+media+"<br>"+"El mayor numero es: "+numMayor+"<br>"+"El meno numero es: "+numMenor
    
}