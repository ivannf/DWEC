const elemento1 = document.getElementById("submit");
elemento1.addEventListener("click", ej27);

function ej27() {
    
    let texto = document.getElementById('texto').
    value.toLowerCase().split('');

    let caracteresRepetidos = [];

    texto.forEach((i) => {
        caracteresRepetidos[i] = (caracteresRepetidos[i] || 0) + 1;
    });

    
    for (let i in caracteresRepetidos) {
        const textoFinal = i + " = " + caracteresRepetidos[i] + "<br>";
        document.getElementById('textoFinal').innerHTML += textoFinal;
    }


}