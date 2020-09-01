//casa
//Questão01
const tarefas = ['Comer', 'dormir', 'viajar', 'estudar', 'trabalhar', 'exercitar-se'];

tarefas.forEach((tarefa) => console.log(tarefa))

//Questão02
const listas = [1, 2, 3, 4, 5];
const novoArray = listas.map(x => x*5)
console.log(novoArray)

//Questão03
const lista = ['la', 'belle', 'de', 'jour']
const novaLista = lista.map( x => x.slice(0, x.length - 1) + x[x.length-1].toUpperCase())
console.log(novaLista)

//questão04

const numeros = [-25, 1, 43, -23252, 29, 11, -15, 431, -964]
const numerosPositivos = numeros.filter((x) => x >= 0);
console.log(numerosPositivos)

//questão05

let numerosAleatorios = []

for(let i = 0; i < 10; i++) {
    numerosAleatorios[i] = Math.ceil(Math.random() * 100)
}
console.log(numerosAleatorios)
const numerosAleatoriosPares = numerosAleatorios.filter(x => !(x % 2))

console.log(numerosAleatoriosPares)


//questãoExtra
const pessoas = [
    {
        nome: 'Jose',
        idade: 29
    },
    {
        nome:'Joao',
        idade: 15
    },
    {
        nome: 'Pedrinho',
        idade: 45
    },
    {
        nome: 'Janete',
        idade: 17
    }
]


const menoresDeIdade = pessoas.filter(x => x.idade <= 18)
console.log(menoresDeIdade)

//Questão06

const palavras = ['Amor', 'comida', 'amora', 'feijoada', 'querida', 'ana','química', 'andorinha']

const palavrasComA = palavras.filter((x) => x.slice(0,1) === 'A' || x.slice(0,1) === 'a')

console.log(palavrasComA)

//Casa
//questão07

const numerosInteiros = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23]

const resultado = numerosInteiros.reduce((acc, x) => {
    return acc + x;
}, 0)

console.log(resultado)

//Questão 08
const numerosQuaisquer = [15, 25, 1, 2, 9, 43, -32, 11,134, 122, 17, -23456, -31, 11, 92, -11]
const maiorValor = numerosQuaisquer.reduce((acc, x) => {
    let maior = acc;
    if(x > maior) {
        maior = x;
    }
    return maior
}, 0)
console.log(maiorValor)

//Qeustão09 
const stringsLegais = ['Morgen', 'Schwarzfahren', 'Schande', 'Krankenhaus', 'Schlimm', 'Amtsenthebungsverfahren']
const maiorString = stringsLegais.reduce((acc, x) => {
    let groeste = acc

    if(groeste.length < x.length) {
        groeste = x;
    }
    return groeste;

})

console.log(maiorString)