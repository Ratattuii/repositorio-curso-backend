1- while (condição) {
  // instruções
}

2- let i: number = 0;

while (i < 5) {
    switch (i) {
        case 0:
            console.log("O contador é zero");
            break;
        case 1:
            console.log("O contador é um");
            break;
        case 2:
            console.log("O contador é dois");
            break;
        default:
            console.log("O contador é maior que dois");
            break;
    }

    i++; // Incrementa o contador a cada iteração
}


3- let diaDaSemana = "segunda";

switch (diaDaSemana) {
    case "segunda":
    case "terça":
    case "quarta":
    case "quinta":
    case "sexta":
        console.log("É um dia útil.");
        break;
    case "sábado":
    case "domingo":
        console.log("É fim de semana.");
        break;
    default:
        console.log("Dia inválido.");
}

4- Sim, pois se não usarmos ele vai continuar rodando o código.

5- É possível, mas não é recomendado por não ser prático.

6- Sim, ele é usado para quando nenhum dos casos correspondentes foram encontrados

7- o código dentro do switch não será executado, a menos que haja um caso padrão (default). Se houver um caso padrão, o código dentro desse caso padrão será executado.

8- Sim, poderiamos usar o switch, por exemplo, dentro de uma função. 

9- Sim...

  let numero = 2;

  switch (numero) {
      case 1:
      case 2:
      case 3:
          console.log("O número é 1, 2 ou 3.");
          break;
      default:
          console.log("O número não está na faixa especificada.");
  }
