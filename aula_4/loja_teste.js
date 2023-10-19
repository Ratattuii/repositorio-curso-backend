"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
var leitor = require("readline-sync");
var Loja = /** @class */ (function () {
    function Loja(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.produtos = [];
    }
    Loja.prototype.setProdutos = function () {
        var nome = leitor.question("Informe o novo produto: ");
        var produto = nome;
        this.produtos.push(produto);
        console.log("O produto: ".concat(produto, " foi adicionado com sucesso!"));
    };
    Loja.prototype.removerProdutos = function () {
        var remover = leitor.question("Insira o nome do produto para remover");
        var index = this.produtos.indexOf(remover);
        this.produtos.splice(index, 1);
    };
    Loja.prototype.mostrarProdutos = function () {
        console.log("Os produtos da sua loja s\u00E3o: ".concat(this.produtos));
    };
    return Loja;
}());
exports.Loja = Loja;
