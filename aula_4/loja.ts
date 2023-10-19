import * as leitor from "readline-sync"

export class Loja{
    nome: String
    endereco: String
    produtos

    constructor(nome: String, endereco: String){
        this.nome = nome
        this.endereco = endereco
    }

    getInfo(): void{
        console.log(`Nome da loja: ${this.nome}, Endereço: ${this.endereco}`)
    }
}

