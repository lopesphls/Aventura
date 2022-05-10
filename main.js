import prompt from "prompt-sync";
import personagem from "./src/personagem.js";
import resposta from "./src/resposta.js";
import sair from "./src/sair.js";
import trabalho from "./src/trabalho.js";

let teclado = prompt();
let escolha = 0;

/*
Durante um festival de 6 dias você podera apostar e fazer fortuna caso não tenha dinheiro vc podera trabalha e arrecadar 60 reais por dia, seu statos social vai depender da quantia que tera ao final do festival sendo: 0 falido, até 100 pobre, até 500 pobre com dinheiro, 1000 classe média, se conseguir quebrar a banca ganha o dobro. tente a sorte e veja até aonde consegue ir*/
/*
Variáveis para armazenar os status do personagem. (1,0) ok
Perguntas que alteram esses status do personagem. (1,0) ok
Laço de repetição que determinará os ciclos onde a história vai se passar. Determinar o que acontecerá ao final do ciclo e como ficarão os status. (1,0)
Variável para controle da passagem do tempo. (1,0)
Variáveis de controle dos status e situações da história. (1,0)
Condicionais para alterações dessas variáveis. (1,5)
Funções para executar cada uma das tarefas. (1,5) ok
Conteúdo de condicionais, laços, funções e objetos bem aplicados. (2,0)
*/
console.log("Bem vindo ao festival de apostas!!!");
console.log(
  "Durante um festival de 15 dias você podera apostar e fazer fortuna caso não tenha dinheiro vc podera trabalha e arrecadar 60 reais por dia, tente a sorte e veja até aonde consegue ir"
);
console.log("Digite seu nome:");
personagem.nome = teclado();

while (personagem.dia < 1) {
  console.clear();
  personagem.dia = personagem.dia + 1;
  console.log(
    `Essa é a rodada ${personagem.nome} faltam ${15 - personagem.dia} dia(s).`
  );
  console.log();
  console.log(`Você pode desistir a qualquer momento, apostar ou trabalhar`);
  console.log();
  resposta();
  console.log();
  if (personagem.dinheiro <= 0 && personagem.dia <= 15) {
    console.log("Deseja trabalhar para tentar mais ou desista do jogo");
    escolha = 0;
    while (escolha != 1 && escolha != 2) {
      escolha = +teclado();
      switch (escolha) {
        case 1:
          trabalho();
          break;
        case 2:
          sair();
          break;

        default:
          console.log("digite 1 para sim ou 2 para não");
          break;
      }
    }
  }
  console.log();
  if (escolha === 2) {
    break;
  }

  console.log("Pressione enter para iniciar um novo dia");
  teclado();
}
