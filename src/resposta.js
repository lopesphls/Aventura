import prompt from "prompt-sync";
import apostar from "./apostar.js";
import personagem from "./personagem.js";
import sair from "./sair.js";
import trabalho from "./trabalho.js";

let teclado = prompt();

export default function resposta() {
  let escolha = 0;
  console.log(`Conta bancaria: ${personagem.dinheiro}`);
  console.log(
    `${personagem.nome}, caso queira participar do festival digite 1- Apostar, 2- Trabalhar, 3 Não participar `
  );
  while (escolha != 1 && escolha != 2 && escolha != 3) {
    escolha = +teclado();
    switch (escolha) {
      case 1:
        console.log("digite quanto vc quer apostar");
        apostar(parseFloat(teclado()));
        break;

      case 2:
        trabalho();
        break;

      case 3:
        sair();
        break;

      default:
        console.log(
          `${personagem.nome}, caso queira participar do festival digite 1- Apostar, 2- Trabalhar, 3 Não participar `
        );
        break;
    }
  }
}
