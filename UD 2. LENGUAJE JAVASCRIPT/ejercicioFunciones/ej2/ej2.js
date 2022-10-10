const element = document.getElementById("submit");
element.addEventListener("click", j2);

function j2() {
    let nombre = document.getElementById("texto").value;
    document.getElementById("textoFinal").innerHTML += "<li>" + nombre + "</li>";
}