const prompt = require("prompt-sync")();

let dia = 0;
let escolha = 0;
let Sair;
let personagem = {
  nome: "",
  dinheiro: 100,
  status: "",
  dado1: [1, 2, 3, 4, 5, 6],
  dado2: [1, 2, 3, 4, 5, 6],
  vitoria: 0,
  dia: 0,
  aposta: function () {
    const resultado = this.dado1[Math.floor(Math.random() * 6)];
    const resultado2 = this.dado1[Math.floor(Math.random() * 6)];
    return resultado + resultado2;
  },
};
let banca = {
  ganho: 0,
  perca: 0,
  dinheiro: 100000,
  vitoria: 0,
  dado1: [1, 2, 3, 4, 5, 6],
  dado2: [1, 2, 3, 4, 5, 6],
  aposta: function () {
    const resultado = this.dado1[Math.floor(Math.random() * 6)];
    const resultado2 = this.dado1[Math.floor(Math.random() * 6)];
    return resultado + resultado2;
  },
};
console.log("Bem vindo ao festival de apostas!!!");
console.log(
  "Durante um festival de 15 dias você podera apostar e fazer fortuna caso não tenha dinheiro vc podera trabalha e arrecadar 60 reais por dia, tente a sorte e veja até aonde consegue ir"
);
console.log("Digite seu nome:");
personagem.nome = prompt();

function resposta() {
  let escolha = 0;
  console.log(`Conta bancaria: ${personagem.dinheiro}`);
  while (escolha != 1 && escolha != 2 && escolha != 3) {
    console.log(
      `${personagem.nome}, caso queira participar do festival digite 1- Apostar, 2- Trabalhar, 3 Não participar `
    );
    escolha = +prompt();
  }

  switch (escolha) {
    case 1:
      console.log("digite quanto vc quer apostar");
      apostar(parseFloat(prompt()));
      break;

    case 2:
      trabalho();
      break;

    case 3:
      Sair = sair();
      break;

    default:
      console.log(
        `${personagem.nome}, caso queira participar do festival digite 1- Apostar, 2- Trabalhar, 3 Não participar `
      );
      break;
  }
}

function apostar(valor) {
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

function sair() {
  if (personagem.vitoria < banca.vitoria) {
    personagem.status = "Perdeu :(";
    console.log(`Parece q não esta com sorte. ${personagem.status} dessa vez`);
  } else if (personagem.vitoria > banca.vitoria) {
    personagem.status = "Ganhou  :) ";
    console.log(
      `Boa!!! agora ja pode pagar o lanche você ${personagem.status}`
    );
  } else {
    personagem.status = " é :| ";
    console.log(`${personagem.status}, pode tentar mais na proxima vez.`);
  }
  return "sim";
}

function trabalho() {
  //  ;
  console.log("Está precisando trabalhar para apostar?");
  console.log();
  console.log("Neste trabalho irá receber 60 reais no dia");
  console.log();
  console.log("Aperte 1- Trabalhar ou 2- Voltar pro menu principal");
  console.log();
  let escolha = 0;
  while (escolha !== 1 && escolha !== 2) {
    escolha = +prompt();
    switch (escolha) {
      case 1:
        console.log("Está aqui 60 reais no seu dia de serviço");

        if (dia < 15) {
          console.log("Quantos dias deseja trabalhar?");
          dia = +prompt();
          while (dia >= 15) {
            console.log("Não é possivel trabalhar mais do que 14 dias");
            console.log("Quantos dias deseja trabalhar?");
            dia = +prompt();
          }

          personagem.dia = personagem.dia + dia;

          if (personagem.dia >= 15) {
            console.log("Não é possivel trabalhar mais do que 14 dias");
            console.log();
            personagem.dia -= dia;
            console.log(`Faltam ${15 - personagem.dia} dia(s) para acabar`);
          } else if (personagem.dia <= 15) {
            console.log();
            console.log(`Faltam ${15 - personagem.dia} dia(s) para acabar`);
          }
        }
        console.log(`Valor recebido no trabalho: R$ ${60 * dia}`);
        personagem.dinheiro += 60 * dia;
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

for (personagem.dia; personagem.dia < 15; personagem.dia++) {
  console.log(
    `Essa é a rodada ${personagem.nome} faltam ${15 - personagem.dia} dia(s).`
  );
  console.log();
  console.log(`Você pode desistir a qualquer momento, apostar ou trabalhar`);
  console.log();
  resposta();
  console.log();
  console.log();
  if (personagem.dinheiro <= 0 && personagem.dia <= 15) {
    console.log("Deseja trabalhar para tentar mais ou desista do jogo");
    escolha = 0;
    while (escolha != 1 && escolha != 2) {
      escolha = +prompt();
    }
    switch (escolha) {
      case 1:
        trabalho();
        break;
      case 2:
        Sair = sair();
        break;

      default:
        console.log("digite 1 para sim ou 2 para não");
        break;
    }
  }
  if (Sair == "sim") {
    return (personagem.dia = 15);
  }

  console.log("Pressione enter para iniciar um novo dia");
  prompt();
  if (personagem.dia == 14) {
    sair();
  }
}
