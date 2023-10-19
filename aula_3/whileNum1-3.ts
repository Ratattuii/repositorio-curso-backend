import * as leitor from "readline-sync"

let continuar = true;

while (continuar) {
  const numero: number = leitor.questionFloat("Digite um número de 1 a 3 (ou qualquer outro número para sair): ")

    switch (numero) {
      case 1:
        console.log("Você digitou o número 1.");
        break;
      case 2:
        console.log("Você digitou o número 2.");
        break;
      case 3:
        console.log("Você digitou o número 3.");
        break;
      default:
        console.log("Número fora do intervalo especificado. Saindo.");
        continuar = false; // Define continuar como falso para sair do loop.
    }
}   