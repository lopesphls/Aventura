import prompt from "prompt-sync";
import banca from "./banca.js";
import personagem from "./personagem.js";
import trabalho from "./trabalho.js";

let teclado = prompt();
let escolha = 0;

export default function apostar(valor) {
  console.clear();
  if (personagem.dinheiro < valor) {
    console.log("Você não tem dinheiro suficiente");
    console.log(
      "Você precisa trabalhar para ter dinheiro, deseja trabalhar digite 1 para sim ou 2 para não"
    );
    escolha = 0;
    while (escolha != 1 && escolha != 2) {
      escolha = +teclado();
      switch (escolha) {
        case 1:
          trabalho();
          break;
        case 2:
          console.log("o jogo termina por aqui");
          break;

        default:
          console.log("digite 1 para sim ou 2 para não");
          break;
      }
    }
  } else {
    console.log(
      `Dados da banca: ${banca.aposta()}, dados do apostador: ${personagem.aposta()} `
    );

    if (banca.aposta() <= personagem.aposta()) {
      console.clear();
      console.log(`Você não ganhou dessa vez`);
      personagem.dinheiro = personagem.dinheiro - valor;
      banca.ganho += valor;
      banca.dinheiro = banca.dinheiro + valor;
      console.log();
      console.log(`Total de ganho da banca: ${banca.ganho}`);
      console.log();
      console.log(`Valor total da banca ${banca.dinheiro}`);
      console.log();
      console.log(`Total da sua conta ${personagem.dinheiro}`);
      console.log();
      banca.vitoria = banca.vitoria + 1;
    } else {
      console.clear();
      console.log(`Você ganhou!!!}`);
      personagem.dinheiro = personagem.dinheiro + valor;
      banca.dinheiro = banca.dinheiro - valor;
      banca.perca -= valor;
      console.log();
      console.log(`Total que a banca perdeu ${banca.perca}`);
      console.log();
      console.log(`Valor total da banca ${banca.dinheiro}`);
      console.log();
      console.log(`Será transferido pra sua conta ${valor}`);
      console.log();
      console.log(`Total da sua conta ${personagem.dinheiro}`);
      console.log();
      personagem.vitoria = personagem.vitoria + 1;
    }
  }
}
