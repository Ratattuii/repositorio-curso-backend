import * as leitor from "readline-sync"
import { Farmacia } from "./farmacia"
import { Medicamento } from "./farmacia"
let menu: boolean = false

let dorflex = new Medicamento(0, "dorflex", 20, 5)

let listaMedicamentos: Array<Medicamento> = []

let option = leitor.questionInt("Selecione uma opção: \n1 - Adicionar um novo medicamento \n2 - Remover um medicamento do estoque \n3 - Ver lista de medicamentos \n4 - Sair\n\n");
switch(option){
    case 1:

        break;
    case 2:

        break;
    case 3:

    case 4:
        console.log('Saindo do menu...');
        menu = false;
        break;
    }