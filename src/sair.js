import banca from "./banca.js";
import personagem from "./personagem.js";

export default function sair() {
  if (personagem.vitoria > banca.vitoria) {
    personagem.status = "Perdedor :(";
    console.log(`Parece q não esta com sorte. ${personagem.status}`);
  } else if (personagem.vitoria < banca.vitoria) {
    personagem.status = "Vencedor  :) ";
    console.log(`Boa!!! agora ja pode pagar o lanche ${personagem.status}`);
  } else {
    personagem.status = " :| ";
    console.log(`${personagem.status}, pode tentar mais na proxima vez.`);
  }
  return true;
}
