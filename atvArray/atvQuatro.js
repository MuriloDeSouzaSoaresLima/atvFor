console.clear();
var teclado = require("prompt-sync")();
var numeros = new Array(10);
var numerosInvert = new Array(10);
for (var n1 = 0; n1 < 10; n1++) {
    var numero = parseInt(teclado("Digite o ".concat(n1 + 1, "\u00B0 n\u00FAmero: ")));
    numeros[n1] = numero;
}
for (var n1 = 0, n2 = 9; n1 < 10; n1++, n2--) {
    numerosInvert[n2] = numeros[n1];
}
for (var n1 = 0; n1 < 10; n1++) {
    console.log(numerosInvert[n1]);
}
