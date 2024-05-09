console.clear();
let teclado = require(`prompt-sync`)();

let numeros = new Array(10);
let numerosInvert = new Array(10);

for(let n1 = 0; n1 < 10; n1++) {
    let numero = parseInt(teclado(`Digite o ${n1+ 1}° número: `));
    numeros[n1] = numero;
}

for(let n1 = 0, n2 = 9; n1 < 10; n1++, n2--) {
    numerosInvert[n2] = numeros[n1];
}

for(let n1 = 0; n1 < 10; n1++) {
    console.log(numerosInvert[n1]);
}