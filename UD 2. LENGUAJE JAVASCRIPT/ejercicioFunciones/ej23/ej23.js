let baseImponible = parseInt(prompt("Introduce la base imponible"));
let iva = prompt("Introduce el IVA");
let peso = parseInt(prompt("Introduce el peso"));
let gastosEnvio = (peso<1) ? 3 :
(peso<3 && peso>1) ? 5 :
10;

if(iva == "normal"){
    let iva2 = (baseImponible*21)/100;

    let resultadoFinal = baseImponible+iva2+gastosEnvio;

    alert(resultadoFinal);
}else{
    let iva2 = (baseImponible*10)/100;

    let resultadoFinal = baseImponible+iva2+gastosEnvio;

    alert(resultadoFinal);
}
