var teclado = require('prompt-sync')();
var n2 = parseInt(teclado("Digite um n\u00FAmero inteiro para calcular o fatorial: "));
if (n2 < 0) {
    console.log("O fatorial n\u00E3o est\u00E1 definido para n\u00FAmeros negativos.");
}
else {
    var fatorial = 1;
    for (var n1 = 1; n1 <= n2; n1++) {
        fatorial *= n1;
    }
    console.log("O fatorial de ".concat(n2, " \u00E9 ").concat(fatorial, "."));
}
