"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var nomeUsuario = leitor.question("Digite seu nome de usuário: ");
    var sistemaOperacional = leitor.question("Digite o nome do seu sistema operacional: ");
    displayAlertMessage(nomeUsuario, sistemaOperacional);
}
function displayAlertMessage(a, b) {
    console.log("There's a new sign-in request on ".concat(a, " for your Google Account ").concat(b, "."));
}
main();
