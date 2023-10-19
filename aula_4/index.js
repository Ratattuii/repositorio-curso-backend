"use strict";
// import * as leitor from "readline-sync"
// import { Loja } from "./loja"
// let menu: Boolean = true
Object.defineProperty(exports, "__esModule", { value: true });
// let lojaUm = new Loja("Americanas", "Rua")
// let listaDeProdutos = ["Cama", "Ventilador", "Armario"]
// while(menu){
//     let option = leitor.questionInt("Selecione uma opção: \n1 - Adicionar um produto \n2 - Remover um produto \n3- Ver lista de produtos \n4 - Sair\n\n");
//     switch(option){
//         case 1:
//             let novoProduto = leitor.question('Digite o nome do produto que deseja adicionar:');
//             if(listaDeProdutos.indexOf(novoProduto) > -1){
//                 console.log(`\nO produto ${novoProduto} já foi adicionado\n`);
//             }else{
//                 listaDeProdutos.push(novoProduto)
//                 console.log(`O produto ${novoProduto} foi adicionado com êxito. Lista atualizada: ${listaDeProdutos}\n`)
//             }
//             break;
//         case 2:
//             let removidoProduto = leitor.question('Digite o nome do produto que deseja remover: \n')
//                 const index = listaDeProdutos.indexOf(removidoProduto)
//                 listaDeProdutos.splice(index, 1)
//                 console.log(`O produto ${removidoProduto} foi removido. Lista atualizada: ${listaDeProdutos}\n`)
//             break;
//         case 3:
//             lojaUm.getInfo();
//             console.log(listaDeProdutos);
//             break;
//         case 4:
//             console.log('Saindo do menu...');
//             menu = false;
//             break;
//         }
//     }
var leitor = require("readline-sync");
var loja_teste_1 = require("./loja_teste");
var menu = true;
var loja = new loja_teste_1.Loja("Americanas", "Rua");
while (menu) {
    var option = leitor.questionInt("Selecione uma opção: \n1 - Adicionar um produto \n2 - Remover um produto \n3 - Ver lista de produtos \n4 - Sair\n\n");
    switch (option) {
        case 1:
            loja.setProdutos();
            break;
        case 2:
            loja.removerProdutos();
            break;
        case 3:
            loja.mostrarProdutos();
            break;
        case 4:
            console.log('Saindo do menu...');
            menu = false;
            break;
    }
}
