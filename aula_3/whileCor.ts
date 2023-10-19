import * as leitor from "readline-sync"

let continuar = true;

while (continuar) {
  const cor: string = leitor.question("Escreva o nome de uma cor e lhe direi 5 coisas que tem essa cor: ")

    switch (cor) {
      case "Verde":
        console.log("Maçã Verde, Folhas, Alface, Shrek, Abacate");
        break;
      case "Azul":
        console.log("Céu, Blueberry, Mar, Arara-Azul, Sapo-boi-azul");
        break;
      case "Vermelho":
        console.log("Sangue, Maçã, Morango, Joaninha, Rosas");
        break; 
      default:
        console.log("Cor indisponivel. Saindo.");
        continuar = false;
    }
}   