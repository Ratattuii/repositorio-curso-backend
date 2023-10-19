"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var adulto = leitor.questionInt("Insira a quantidade de adultos que existem na festa: ");
    var crianca = leitor.questionInt("Insira o número de crianças que existem na festa: ");
    console.log("O tamanho total da festa é: ", calcula(adulto, crianca));
}
function calcula(adulto, crianca) {
    return adulto + crianca;
}
main();
