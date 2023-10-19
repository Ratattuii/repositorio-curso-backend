import * as leitor from "readline-sync"

let continuar = true;

while (continuar) {
  const numero: number = leitor.questionFloat("Digite um número de 1 a 12 (ou 0 para sair): ")

    switch (numero) {
        case 0:
            console.log("Saindo...");
            continuar = false;
        case 1:
            console.log("Você digitou o número 1. Esse é o mês de Janeiro.");
            break;
        case 2:
            console.log("Você digitou o número 2. Esse é o mês de Fevereiro");
            break;
        case 3:
            console.log("Você digitou o número 3. Esse é o mês de Março.");
            break;
        case 4:
            console.log("Você digitou o número 4. Esse é o mês de Abril.");
            break;
        case 5:
            console.log("Você digitou o número 5. Esse é o mês de Maio.");
            break;
        case 6:
            console.log("Você digitou o número 6. Esse é o mês de Junho.");
            break;
        case 7:
            console.log("Você digitou o número 7. Esse é o mês de Julho.");
            break;
        case 8:
            console.log("Você digitou o número 8. Esse é o mês de Agosto.");
            break;
        case 9:
            console.log("Você digitou o número 9. Esse é o mês de Setembro.");
            break;
        case 10:
            console.log("Você digitou o número 10. Esse é o mês de Outubro.");
            break;
        case 11:
            console.log("Você digitou o número 11. Esse é o mês de Novembro.");
            break;
        case 12:
            console.log("Você digitou o número 12. Esse é o mês de Dezembro.");
            break;
        default:
            console.log("Esse não é um mês válido.");
        }
}   