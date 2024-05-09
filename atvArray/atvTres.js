console.clear();
var teclado = require("prompt-sync")();
var numeros = new Array(10);
for (var n = 0; n < 10; n++) {
    var numero = parseInt(teclado("Digite o ".concat(n + 1, "\u00B0 n\u00FAmero: ")));
    numeros[n] = numero;
}
var maiorNumero = numeros[0];
for (var n = 1; n < 10; n++) {
    if (numeros[n] > maiorNumero) {
        maiorNumero = numeros[n];
    }
}
console.log("O maior n\u00FAmero \u00E9 ".concat(maiorNumero));
