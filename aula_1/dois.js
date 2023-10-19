"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var nome = leitor.question("Insira o nome do item: ");
    var valor = leitor.questionFloat("Insira o valor do item: ");
    var desconto = leitor.questionInt("Insira o desconto: ");
    console.log("O nome do item \u00E9: ".concat(nome));
    console.log("O valor do item \u00E9: ".concat(valor));
    console.log("O desconto do item \u00E9: ".concat(valor * ((100 - desconto) / 100)));
}
main();
