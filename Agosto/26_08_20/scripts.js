//Questão 01
const frase = 'Era uma vez um lugarzinho no meio do nada.';

const palavras = frase.split(' ');

for(let palavra of palavras) {
    console.log(palavra)
}

//Questão 02
const arrayInteiros = [1, 5, 15, 20, -2, -9, 17, 43, 0, 2];
let arrayNovo = [];
for (let inteiro of arrayInteiros){
    if(inteiro >= 10){
        arrayNovo.push(inteiro)
    }
}
console.log(arrayNovo)

//Questão 03
palavras.forEach(palavra => console.log(palavra))

//Questão 04
arrayNovo.forEach((numero, index) => console.log(`Elemento: ${numero},\nÍndice: ${index}`))

//Questão 05
arrayNovo.forEach((numero, index) => {
    
    console.log(`${numero} vira ${arrayNovo[index] = numero*2}`);
    if(index === arrayNovo.length -1){
        console.log("That's all, Folks!")
    }
})

//Questão 06
let vitoriasTime1 = 0;
let vitoriasTime2 = 0;


let empates = 0;

const jogos = [
    {
        nome: 'Partida 01',
        golsTime1: 3,
        golsTime2: 1 
    },

    {
        nome: 'Partida 02',
        golsTime1: 1,
        golsTime2: 5
    },
    {
        nome: 'Partida 03',
        golsTime1: 0,
        golsTime2: 0
    },
    {
        nome: 'Partida 03',
        golsTime1: 1,
        golsTime2: 3
    }
]

const quest06 = () => {
    jogos.forEach((partida) => {
        if(partida.golsTime1 > partida.golsTime2) {
            vitoriasTime1++;
        } else if (partida.golsTime1 < partida.golsTime2) {
            vitoriasTime2++;
        } else {
            empates++;
        }
    
    })
    //console.log(`\nVitorias time 1: ${vitoriasTime1}\nVitorias time 2: ${vitoriasTime2}\nEmpates: ${empates}`)
    return [vitoriasTime1, vitoriasTime2, empates]

    
}

//console.log(quest06())
//Questão 07
const quest07 = () => {
    let pTime1 = 0
    let pTime2 = 0
    lista = quest06()
    console.log(lista)
    
    pTime1 = lista[0]*3 + lista[2]
    pTime2 = lista[1]*3 + lista[2]


    console.log(`\nPontos time 1: ${pTime1}\nPontos time 2: ${pTime2}`)
}

quest07()

//QUestão 08
const quest08 = () => {
    let golsMarcadosTime1 = 0;
    let golsMarcadosTime2 = 0;

    jogos.forEach((partida) => {
        golsMarcadosTime1 += partida.golsTime1;
        golsMarcadosTime2 += partida.golsTime2;
        console.log( golsMarcadosTime1,  golsMarcadosTime2)
    })
    console.log(`Time 01 Marcados: ${golsMarcadosTime1} Sofridos: ${golsMarcadosTime2}\nTime 01 Marcados: ${golsMarcadosTime2} Sofridos: ${golsMarcadosTime1}`)
}
quest08()

//Questão 09
const quest09 = () => {
    let contaSeis = 0
    jogos.forEach((partida) => {
        if(partida.golsTime1 + partida.golsTime2 >= 6){
            contaSeis++;

        }
    })
    console.log(`Ocorreram pelo menos 6 gols em ${contaSeis} partida(s)`)
}

quest09()

// Questão 10
const quest10 = () => {
    jogos.forEach((partida, indice) => {
        if(partida.golsTime1 === 0 && partida.golsTime2 === 0) {
            console.log('Teve empate na partida: ' + indice)
        }
    })

}

quest10()