import * as leitor from "readline-sync"

export class Loja{
    nome: String
    endereco: String
    produtos: Array<String>

    constructor(nome: String, endereco: String){
        this.nome = nome
        this.endereco = endereco
        this.produtos = []
    }

    setProdutos(): void{
        let nome = leitor.question("Informe o novo produto: ")
        let produto = nome
        this.produtos.push(produto)
        console.log(`O produto: ${produto} foi adicionado com sucesso!`);
    }

    removerProdutos(): void{
        const remover = leitor.question("Insira o nome do produto para remover")
        const index = this.produtos.indexOf(remover)
        this.produtos.splice(index, 1)
    }

    mostrarProdutos(): void{
        console.log(`Os produtos da sua loja são: ${this.produtos}`);
    }
}

