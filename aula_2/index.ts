// import * as leitor from "readline-sync"
// import { Livro } from "./livros";

// function main(){
//     let livro = cadastro()
//     console.log(livro.obterDetalhes())
// }

// function cadastro(){
//     let titulo = leitor.question("Insira o título do livro: ")
//     let autor = leitor.question("Insira o autor do livro: ")
//     let anoPublicacao = leitor.questionInt("Insira o ano de publicacao do livro: ")
//     let livro = new Livro(titulo, autor, anoPublicacao)
//     return livro
// }

// main()

import * as leitor from "readline-sync"
import { alunos } from "./notas";

function cadastro(): alunos{
    let nome = leitor.question("Insira seu nome: ")
    let aluno = new alunos(nome)
    console.log("Cadastrado  com sucesso");

    let n1 = leitor.questionFloat("Insira a primeira nota: ");
    let n2 = leitor.questionFloat("Insira a segunda nota: ");
    let n3 = leitor.questionFloat("Insira a terceira nota: ")
    aluno.setNotas(n1, n2, n3)
    return aluno
}

function main(): void {
    let aluno = cadastro()
    console.log(aluno.getMedia());
}

main()