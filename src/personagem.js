let personagem = {
  nome: "",
  dinheiro: 50,
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

export default personagem;
