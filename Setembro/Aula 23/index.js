const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e']

const q01 = [...arr1, ...arr2];
console.log(q01)

const q02 = [0, 1, ...arr1, 2, 3, ...arr2, 4, 5]
console.log(q02)

const carro = {
    modelo: "Gol",
    marca: "Volkswagen",
    cor: "Vermelho",
    potenciaCV: 80,
    preco: 3000000
}

const {preco, ...novoCarro} = carro;

console.log(novoCarro)

//Questão 04, 05 e 06
const ordenar = (...args) => {
    const arrayOrdenado = args.sort((a, b) => a - b)
    return arrayOrdenado;
}

console.log(ordenar(0, 33, 21, 1, 98, 34, 11))
console.log(ordenar(...[99,127,1, 22, 49, -33, 0, 97]))

console.log([99,127,1, 22, 49, -33, 0, 97].sort((a,b) => a - b))