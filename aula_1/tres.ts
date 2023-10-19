import * as leitor from "readline-sync"

function main() {
    let adulto = leitor.questionInt("Insira a quantidade de adultos que existem na festa: ")
    let crianca = leitor.questionInt("Insira o número de crianças que existem na festa: ")

    console.log("O tamanho total da fe4sta é: ", calcula(adulto, crianca));
}

function calcula(adulto, crianca):  {
    return adulto + crianca
}

main()