"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alunos = void 0;
var alunos = /** @class */ (function () {
    function alunos(nome) {
        this.notas = [];
        this.nome = nome;
        this.notas = [];
    }
    alunos.prototype.setNotas = function (n1, n2, n3) {
        this.notas.push(n1);
        this.notas.push(n2);
        this.notas.push(n3);
    };
    alunos.prototype.getMedia = function () {
        var media = (this.notas[0] + this.notas[1] + this.notas[2]) / 3;
        return media;
    };
    return alunos;
}());
exports.alunos = alunos;
