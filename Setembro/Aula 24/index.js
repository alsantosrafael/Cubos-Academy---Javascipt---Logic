//Questão 01

const arr =
  "era uma vez um lugarzinho no meio do nada com sabor de chocolate e cheiro de terra molhada";
const encontrado = arr.split(" ").find((x) => (x.length >= 10 ? true : false));

console.log(encontrado);

//Questão 02
const poema = `às vezes no silêncio 
da noite
eu fico imaginando
nós dois`;

const poemaSplitado = poema.split("");
console.log(poemaSplitado);
const indexEspaco = [];
let pos = 0;

while (pos !== -1) {
  pos = poemaSplitado.findIndex((x) => (x === "\n" ? true : false));
  if (pos !== -1) {
    indexEspaco.push(pos);
    poemaSplitado.splice(pos, 1);
  }
}
console.log(indexEspaco);

//Questão 03

const arr2 = [1, 3, 9, 45, 2, 11, 27];
const existePar = arr2.some((x) => x % 2 === 0);
console.log(existePar);

//Questão 04
const arr3 = [32, 95, 33, -15, 0.5, 4, 15.3, -72.4];

const existeQP = arr3.some((x) => {
  if (x > 0) {
    if (Math.floor(x) === x && Math.floor(Math.sqrt(x)) === Math.sqrt(x)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});

console.log(existeQP);
// Quest 05
const arr4 = [25, 11, 23, 45, 69, 29];

const todosIntPos = arr4.every((x) => {
  if (x > 0 && Math.floor(x) === x) {
    return true;
  } else {
    return false;
  }
});

console.log(todosIntPos);
