"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var horaHoje = leitor.questionFloat("Digite quantas horas você passou hoje no celular: ");
    var horaOntem = leitor.questionFloat("Digite quantas horas você passou ontem no celular: ");
    console.log(timeSpent(horaHoje, horaOntem));
}
function timeSpent(a, b) {
    return a > b;
}
main();
