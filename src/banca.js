import prompt from "prompt-sync";

let teclado = prompt();

let banca = {
  ganho: 0,
  perca: 0,
  dinheiro: 3000,
  vitoria: 0,
  dado1: [1, 2, 3, 4, 5, 6],
  dado2: [1, 2, 3, 4, 5, 6],
  aposta: function () {
    const resultado = this.dado1[Math.floor(Math.random() * 6)];
    const resultado2 = this.dado1[Math.floor(Math.random() * 6)];
    return resultado + resultado2;
  },
};
export default banca;
