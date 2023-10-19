"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
var Loja = /** @class */ (function () {
    function Loja(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }
    Loja.prototype.getInfo = function () {
        console.log("Nome da loja: ".concat(this.nome, ", Endere\u00E7o: ").concat(this.endereco));
    };
    return Loja;
}());
exports.Loja = Loja;
