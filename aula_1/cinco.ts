// Função para realizar a operação de adição
function soma(a: number, b: number, c: number): number {
    return a + b + c;
}

// Função para realizar a operação de subtração
function subtracao(a: number, b: number, c: number): number {
    return a - b - c;
}

// Função para realizar a operação de multiplicação
function multiplicacao(a: number, b: number, c:number): number {
    return a * b * c;
}

// Função para realizar a operação de divisão
function divisao(a: number, b: number, c: number): number {
    return a / b / c;
}

function main() {

    const numero1: number = 10;
    const numero2: number = 5;
    const numero3: number = 2;

    console.log(`Número 1: ${numero1}`);
    console.log(`Número 2: ${numero2}`);
    console.log(`Número 3: ${numero3}`);

    console.log(`Soma: ${soma(numero1, numero2, numero3)}`);
    console.log(`Subtração: ${subtracao(numero1, numero2, numero3)}`);
    console.log(`Multiplicação: ${multiplicacao(numero1, numero2, numero3)}`);
}

main();
