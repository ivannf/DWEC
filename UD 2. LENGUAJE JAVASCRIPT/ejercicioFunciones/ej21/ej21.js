let n = parseInt(prompt("Introduce el numero"));
let final = [];

function ej21(){
    for (let i = n; i > 0; i--) {
        final.push(i);
    }

    console.log(final)
}

ej21(n);