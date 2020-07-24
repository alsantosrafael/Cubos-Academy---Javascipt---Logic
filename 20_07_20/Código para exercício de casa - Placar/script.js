let scoreA = 0; //pontuação do time A no set atual
let scoreB = 0; //pontuação do time B no set atual
let setA = 0; //quantidade de sets vencidos pelo time A
let setB = 0; //quantidade de sets vencidos pelo time B
let infoAdicional = "Vai começar a partida!";

function processarPonto() {
    //seu código aqui


    //sempre chame essa função para que as alterações nas variáveis reflitam na tela
    atualizarPlacar();
}

//Não precisa mexer
function atualizarPlacar() {
    document.getElementById("scoreA").innerHTML = scoreA;
    document.getElementById("scoreB").innerHTML = scoreB;
    document.getElementById("setA").innerHTML = setA;
    document.getElementById("setB").innerHTML = setB;
    document.getElementById("info-adicional").innerHTML = infoAdicional;
}


document.getElementById("scoreA").addEventListener("click", () => {
    scoreA++;
    document.getElementById("scoreA").innerHTML = scoreA;
    processarPonto();
});

document.getElementById("scoreB").addEventListener("click", () => {
    scoreB++;
    document.getElementById("scoreB").innerHTML = scoreB;
    processarPonto();
});
atualizarPlacar();