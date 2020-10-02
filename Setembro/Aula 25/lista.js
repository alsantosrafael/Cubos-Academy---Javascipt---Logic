const fs = require("fs");

const util = require("util");
const jogos = [];

const tabelaFormatada = [];
const escreverArquivo = util.promisify(fs.writeFile);
const info = fs.readFileSync("brasileirao.txt").toString().split("\n");
info.map((jogo) => {
  jogos.push({
    timeA: jogo.split("\t")[0],
    timeB: jogo.split("\t")[4],
    golsA: Number(jogo.split("\t")[1]),
    golsB: Number(jogo.split("\t")[3]),
  });
});

const formataTabela = (time, golsFeitos, golsSofridos, pontos) => {
  const flag = tabelaFormatada.findIndex((x) => x.time === time);

  if (flag === -1) {
    tabelaFormatada.push({
      time,
      jogos: 1,
      pontos,
      vitorias: pontos === 3 ? 1 : 0,
      derrotas: pontos === 0 ? 1 : 0,
      empates: pontos === 1 ? 1 : 0,
      golsFeitos,
      golsSofridos,
      saldo: golsFeitos - golsSofridos,
    });
    return;
  }
  tabelaFormatada[flag].jogos++;
  tabelaFormatada[flag].pontos += pontos;
  (tabelaFormatada[flag].vitorias += pontos === 3 ? 1 : 0),
    (tabelaFormatada[flag].derrotas += pontos === 0 ? 1 : 0),
    (tabelaFormatada[flag].empates += pontos === 1 ? 1 : 0),
    (tabelaFormatada[flag].golsFeitos += golsFeitos),
    (tabelaFormatada[flag].golsSofridos += golsSofridos),
    (tabelaFormatada[flag].saldo =
      tabelaFormatada[flag].golsFeitos - tabelaFormatada[flag].golsSofridos);
};

jogos.forEach((jogo) => {
  if (jogo.golsA > jogo.golsB) {
    formataTabela(jogo.timeA, jogo.golsA, jogo.golsB, 3);
    formataTabela(jogo.timeB, jogo.golsB, jogo.golsA, 0);
  } else if (jogo.golsB > jogo.golsA) {
    formataTabela(jogo.timeA, jogo.golsA, jogo.golsB, 0);
    formataTabela(jogo.timeB, jogo.golsB, jogo.golsA, 3);
  } else {
    formataTabela(jogo.timeA, jogo.golsA, jogo.golsB, 1);
    formataTabela(jogo.timeB, jogo.golsB, jogo.golsA, 1);
  }
});

const ordenaTabela = (times) => {
  const timesOrdenados = times.sort((timeA, timeB) => {
    if (timeB.pontos > timeA.pontos) return 1;
    if (timeA.pontos > timeB.pontos) return -1;
    if (timeB.vitorias > timeA.vitorias) return 1;
    if (timeA.vitorias > timeB.vitorias) return -1;
    if (timeB.saldo > timeA.saldo) return 1;
    if (timeA.saldo > timeB.saldo) return -1;
    if (timeB.golsFeitos > timeA.golsFeitos) return 1;
    if (timeA.golsFeitos > timeB.golsFeitos) return -1;
    return a.time.localeCompare(b.time);
  });
  return timesOrdenados;
};

escreverArquivo(
  "tabelaOrdemPontos.json",
  JSON.stringify(
    tabelaFormatada.sort((a, b) => b.pontos - a.pontos),
    null,
    4
  )
);
const tabelaOrdenada = escreverArquivo(
  "tabelaOrdenada.json",
  JSON.stringify(ordenaTabela(tabelaFormatada), null, 4)
);

const ordenaAlfabetica = (tabela) => {
  const tabelaOrdenada = tabela.sort((a, b) => a.time.localeCompare(b.time));
  return tabelaOrdenada;
};
const tabelaAlfabetica = escreverArquivo(
  "tabelaOrdemAlfabetica.json",
  JSON.stringify(ordenaAlfabetica(tabelaFormatada), null, 4)
);

const ordenaEmpates = (tabela) => {
  const tabelaOrdenada = tabela.sort((a, b) => a.empates - b.empates);
  return tabelaOrdenada;
};
const tabelaOrdemCrescenteEmpates = escreverArquivo(
  "tabelaOrdemCrescenteEmpates.json",
  JSON.stringify(ordenaEmpates(tabelaFormatada), null, 4)
);

const ordenaMenosGols = (tabela) => {
  const tabelaOrdenada = tabela.sort((a, b) => a.golsFeitos - b.golsFeitos);
  return tabelaOrdenada;
};

const tabelaOrdemCrescenteFeitos = escreverArquivo(
  "tabelaOrdemCrescenteGolsMarcados.json",
  JSON.stringify(ordenaMenosGols(tabelaFormatada), null, 4)
);

const ordenaMaisGolsSofridos = (tabela) => {
  const tabelaOrdenada = tabela.sort((a, b) => b.golsSofridos - a.golsSofridos);
  return tabelaOrdenada;
};

const tabelaOrdemMaisGolsSofridos = escreverArquivo(
  "tabelaOrdemMaisGolsSofridos.json",
  JSON.stringify(ordenaMaisGolsSofridos(tabelaFormatada), null, 4)
);
