const fs = require("fs");


const jogosOrganizados = [];
const tabela = []


const geraTabela = (time, pontos) => {
    let flag = false;
    tabela.forEach((item, indice) => {
        if(item.time === time) {
            tabela[indice].pontuacao += pontos;
            flag = true
        }
    })
    if(!flag) {
        tabela.push({time: time,
                     pontuacao: pontos})
    }
}

const organizaTabela = (tabela) => {
    let maior = tabela[0]
    let indice = 0
    const tabelaOrganizada = []
    while(tabela.length !== 0) {
        for(let i = 0; i < tabela.length; i++) {
            if(maior.pontuacao < tabela[i].pontuacao) {
                maior = tabela[i]
                indice = i
            }
        }
        tabelaOrganizada.push(maior)
        tabela.splice(indice, 1)
        indice = 0;
        maior = tabela[0]
    }
    return tabelaOrganizada
}



fs.readFile("./brasileirao.txt", (err, data) => {
    if(err) {
        console.log(err)
    } else {
        const jogos = data.toString().split("\n")
        jogos.forEach(jogo => {
            jogosOrganizados.push({timeA: jogo.split('\t')[0],
                                   golsA: Number(jogo.split('\t')[1]),
                                   timeB: jogo.split("\t")[4],
                                   golsB: Number(jogo.split("\t")[3])})
        })
    }

    jogosOrganizados.map(jogo => {
        if(jogo.golsA > jogo.golsB) {
            geraTabela(jogo.timeA, 3);
            geraTabela(jogo.timeB, 0)
        } else if (jogo.golsB > jogo.golsA) {
            geraTabela(jogo.timeA, 0);
            geraTabela(jogo.timeB, 3)
        } else if (jogo.golsA === jogo.golsB) {
            geraTabela(jogo.timeA, 1);
            geraTabela(jogo.timeB, 1)
        }
    })
    console.log(tabela)
    console.log(organizaTabela(tabela))
})

