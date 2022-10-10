
function numeroRandom(numero) {
    return Math.floor(Math.random() * (numero-1) + 1);
}

let dinero = 50;

while(dinero > 0 && dinero < 200){
    
    let apuesta = parseInt(prompt("Introduce la apuesta , ustes tiene "+dinero+"€"));

    while(apuesta > dinero){
        let apuesta = parseInt(prompt("Introduce una apuesta correcta , ustes tiene "+dinero+"€"));
    }

    let numApostado = parseInt(prompt("Introduce un numero del 1-6"))

    if(numApostado == numeroRandom(6)){
        dinero = apuesta*2;
        alert("Usted ha ganado la apuesta")
    }else{
        dinero = dinero - apuesta;
        alert("Usted ha perdido la apuesta")
    }
        
}
