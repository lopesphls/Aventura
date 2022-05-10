import prompt from "prompt-sync";
import personagem from "./personagem.js";

let teclado = prompt();

export default function trabalho() {
  console.clear();
  console.log("Está precisando trabalhar para apostar?");
  console.log();
  console.log("Neste trabalho irá receber 60 reais no dia");
  console.log();
  console.log("Aperte 1- Trabalhar ou 2- Voltar pro menu principal");
  console.log();
  let escolha = 0;
  while (escolha !== 1 && escolha !== 2) {
    escolha = +teclado();
    switch (escolha) {
      case 1:
        console.log("Está aqui 60 reais no seu dia de serviço");
        let resultado = TrabalhoDias();
        console.log(`Valor recebido no trabalho: R$ ${60 * resultado}`);
        personagem.dinheiro = personagem.dinheiro + 60 * resultado;
        break;
      case 2:
        console.log("Então vá apostar vagabundo");
        break;

      default:
        console.log("Aperte 1- Trabalhar ou 2- Voltar pro menu principal");
        escolha = 0;
        break;
    }
  }
}

function TrabalhoDias() {
  console.clear();
  console.log("Quantos dias deseja trabalhar?");
  let dia = +teclado();
  while (isNaN(dia) === true && dia > 15) {
    console.log("Não é possivel trabalhar mais do que 14 dias");
    console.log("Quantos dias deseja trabalhar?");
    dia = +teclado();

    personagem.dia = personagem.dia + dia;

    if (personagem.dia >= 15) {
      console.log("Não é possivel trabalhar mais do que 14 dias");
      console.log();
      personagem.dia -= dia;
      console.log(`Faltam ${15 - personagem.dia} dia(s) para acabar`);
    } else if (personagem.dia <= 15) {
      console.log();
      console.log(`Faltam ${15 - personagem.dia} dia(s) para acabar`);
      return dia;
    }
  }
}
