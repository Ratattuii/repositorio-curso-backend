"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.obterDetalhes = function () {
        return "".concat(this.titulo, ", ").concat(this.autor, ", ").concat(this.anoPublicacao);
    };
    return Livro;
}());
exports.Livro = Livro;
