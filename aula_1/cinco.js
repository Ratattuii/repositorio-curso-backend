// Função para realizar a operação de adição
function soma(a, b, c) {
    return a + b + c;
}
// Função para realizar a operação de subtração
function subtracao(a, b, c) {
    return a - b - c;
}
// Função para realizar a operação de multiplicação
function multiplicacao(a, b, c) {
    return a * b * c;
}
// Função para realizar a operação de divisão
function divisao(a, b, c) {
    return a / b / c;
}
function main() {
    var numero1 = 10;
    var numero2 = 5;
    var numero3 = 2;
    console.log("N\u00FAmero 1: ".concat(numero1));
    console.log("N\u00FAmero 2: ".concat(numero2));
    console.log("N\u00FAmero 3: ".concat(numero3));
    console.log("Soma: ".concat(soma(numero1, numero2, numero3)));
    console.log("Subtra\u00E7\u00E3o: ".concat(subtracao(numero1, numero2, numero3)));
    console.log("Multiplica\u00E7\u00E3o: ".concat(multiplicacao(numero1, numero2, numero3)));
}
main();
