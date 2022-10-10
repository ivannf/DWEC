let contador = 0;

function primo(numero){
    for (let i = 2; i < numero; i++){
        if(numero % i == 0){
            return false;
        }
    }
    return true;
}

for (let i = 1; i < 201; i++) {
    let multiplo5 = i%5 == 0;

    if(multiplo5 == true){
        console.log(i);
    }

    if(!primo(i)){
        contador++;
    }
}

console.log(contador)