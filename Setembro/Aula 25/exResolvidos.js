//Questão 01
const arr = [11, -33, 45, 2, 99, -145, 81, 22.5, 31.7623, 2424.18, -1324];
arr.sort((a, b) => b - a);

console.log(arr);

//Questão 02

const arrumaArray = (arr) => {
  const arrArrumado = arr.map((x) => {
    return x[0].toUpperCase() + x.slice(1, x.length);
  });
  return arrArrumado;
};
const arr2 = [
  "ana",
  "Junior",
  "pedro",
  "Cláudia",
  "Adriana",
  "joanna",
  "fábio",
  "Juncelto",
];

// console.log(arrumaArray(arr2).sort())

//Usando o .localeCompare
arr2.sort((a, b) => a.localeCompare(b));
console.log(arr2);
//Questão 03
arr2.sort((a, b) => b.localeCompare(a));
console.log(arr2);

//Questão 04

const arr3 = [
  {
    nome: "Joanna",
    idade: 22,
  },
  {
    nome: "Pedro",
    idade: 15,
  },
  {
    nome: "Fábio",
    idade: 35,
  },
  {
    nome: "Roberta",
    idade: 5,
  },
];

arr3.sort((a, b) => a.idade - b.idade);
console.log(arr3);
