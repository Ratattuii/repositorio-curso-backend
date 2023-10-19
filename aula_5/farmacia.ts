import * as leitor from "readline-sync"

export class Medicamento{
    id: number
    nome: String
    quantEstoque: number
    preco: number

    constructor(id: number, nome: String, quantEstoque: number, preco: number){
        this.id = id
        this.nome = nome
        this.quantEstoque = quantEstoque
        this.preco = preco
    }
}

export class Farmacia{
    listaMedicamentos: Array<Medicamento>

    constructor(listaMedicamentos: Array<Medicamento>){
        this.listaMedicamentos = []
    }

    venderMedicamento(){
        let medEscolhido: String = leitor.question("Qual remédio você gostaria de comprar: ")
        let quantEscolhida: number = leitor.question("Quantas unidades você quer: ")

        if(quantEscolhida > this.listaMedicamentos.quantEstoque)
    }

    removerMedicamento(){
        let medRemovido: String = leitor.question("Qual remédio você gostaria de tirar do estoque: ")
        this.listaMedicamentos = this.listaMedicamentos.filter(funcionario => medicamento.nome !== medRemovido)
    }
}