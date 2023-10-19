import * as leitor from "readline-sync"

function main(){
    let horaHoje = leitor.questionFloat("Digite quantas horas você passou hoje no celular: ")
    let horaOntem = leitor.questionFloat("Digite quantas horas você passou ontem no celular: ")

    console.log(timeSpent(horaHoje, horaOntem))
}

function timeSpent(a, b): Boolean{
    return a > b
}

main()