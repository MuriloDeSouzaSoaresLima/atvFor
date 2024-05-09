var teclado = require("prompt-sync")();
var numeros = new Array(10);
for (var n1 = 0; n1 < 10; n1++) {
    numeros[n1] = parseFloat(teclado("Digite o ".concat(n1 + 1, "\u00BA n\u00FAmero: ")));
}
for (var n1 = 0; n1 < numeros.length - 1; n1++) {
    for (var n2 = 0; n2 < numeros.length - n1 - 1; n2++) {
        if (numeros[n2] > numeros[n2 + 1]) {
            var temp = numeros[n2];
            numeros[n2] = numeros[n2 + 1];
            numeros[n2 + 1] = temp;
        }
    }
}
console.log("Os n\u00FAmeros em ordem crescente s\u00E3o:");
for (var n1 = 0; n1 < numeros.length; n1++) {
    console.log(numeros[n1]);
}
