import * as leitor from "readline-sync"

function main(){
    let nomeUsuario = leitor.question("Digite seu nome de usuário: ")
    let sistemaOperacional = leitor.question("Digite o nome do seu sistema operacional: ")

    displayAlertMessage(nomeUsuario, sistemaOperacional)
}

function displayAlertMessage(a, b): void{
    console.log(`There's a new sign-in request on ${a} for your Google Account ${b}.`)
}

main()