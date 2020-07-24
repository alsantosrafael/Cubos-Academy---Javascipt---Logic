let scoreA = 0; //pontuação do time A no set atual
let scoreB = 0; //pontuação do time B no set atual
let setA = 0; //quantidade de sets vencidos pelo time A
let setB = 0; //quantidade de sets vencidos pelo time B
let infoAdicional = "Vai começar a partida!";

function processarPonto() {
    //seu código aqui
    if(setA === 1 && setB === 1){
       infoAdicional = 'Que jogo, senhoras e senhores!! Entramos agora no tie break! Time A e B empatados com 1 set a 1!';
       atualizarPlacar()

       if (scoreA >= 14 && (scoreA - scoreB) >= 1){
            infoAdicional = `Match-point para o time A! A multidão não se segura!!`
            atualizarPlacar()
            if ((scoreA == 15 && ((scoreA - scoreB) >= 2)) || (scoreA > 15 && ((scoreA - scoreB) >= 2))){
                    setAFinal = setA+1;
                    setBFinal = setB
                    setA = 0;
                    setB = 0;
                    scoreA = 0;
                    scoreB = 0;
                    infoAdicional = `Time A ganha o jogo com ${setAFinal} sets a ${setBFinal}`;
                    atualizarPlacar();
            } else if ((scoreB == 15 && ((scoreB - scoreA) >= 2)) || (scoreB > 15 && ((scoreB - scoreA) >= 2))){
                    setBFinal = setB+1;
                    setAFinal = setA;
                    setA=0;
                    setB=0;
                    scoreA = 0;
                    scoreB = 0;
                    infoAdicional = `Time B ganha o jogo com ${setBFinal} sets a ${setAFinal}`;
                    atualizarPlacar();
                }
        } else if(scoreB >= 14 && (scoreB - scoreA) >= 1){
            infoAdicional = `Match-point para o time B! Eu nunca vi um público assim!`
            atualizarPlacar()
            if ((scoreA == 15 && ((scoreA - scoreB) >= 2)) || (scoreA > 15 && ((scoreA - scoreB) >= 2))){
                    setAFinal = setA+1;
                    setBFinal = setB
                    setA = 0;
                    setB = 0;
                    scoreA = 0;
                    scoreB = 0;
                    infoAdicional = `Time A ganha o jogo com ${setAFinal} sets a ${setBFinal}!!`;
                    atualizarPlacar();
            } else if ((scoreB == 15 && ((scoreB - scoreA) >= 2)) || (scoreB > 15 && ((scoreB - scoreA) >= 2))){
                    setBFinal = setB+1;
                    setAFinal = setA;
                    setA=0;
                    setB=0;
                    scoreA = 0;
                    scoreB = 0;
                    infoAdicional = `Time B ganha o jogo com ${setBFinal} sets a ${setAFinal}`;
                    atualizarPlacar();
                }
        }

    } else if (scoreA >= 20 && (scoreA - scoreB) >= 1){
        infoAdicional = `Set-point para o time A! A torcida enlouquece!!!`
        atualizarPlacar()
        
        if ((scoreA == 21 && ((scoreA - scoreB) >= 2)) || (scoreA > 21 && ((scoreA - scoreB) >= 2))){
            setA += 1;
            scoreA = 0;
            scoreB = 0;
            infoAdicional = `Time A ganhou o ${setA+setB}º set!`;
            atualizarPlacar()

        } else if ((scoreA >= 20 && (scoreA - scoreB) >= 1) && setA === 1) {
            infoAdicional = `Match-point para o time A! A torcida do time B parece ter perdido a esperança...`
            atualizarPlacar()
            }
    } else if(setA == 2 && setB == 0){
        
            infoAdicional = `Que lavada! O time A ganhou o jogo com 2 sets a zero!`;
            scoreA = 0;
            scoreB = 0;
            setA = 0;
            atualizarPlacar();
                
    } else if(scoreB >= 20 && (scoreB - scoreA) >= 1){
        infoAdicional = `Set-point para o time B! A torcida vai à loucura!!`
        atualizarPlacar()
        
        if ((scoreB == 21 && ((scoreB - scoreA) >= 2)) || (scoreB > 21 && ((scoreB - scoreA) >= 2))){
            setB += 1;
            scoreA = 0;
            scoreB = 0;
            infoAdicional = `Time B ganhou o ${setA+setB}º set! A torcida explode em êxtase`
            atualizarPlacar()

        } else if ((scoreB >= 20 && (scoreB - scoreA) >= 1) && setB === 1) {
                infoAdicional = `Match-point para o time B! A torcida do time A está ansiosa...`;
                atualizarPlacar();
        } 
    } else if(setB == 2 && setA == 0){
                    
            infoAdicional = `Que lavada! O time B ganhou o jogo com 2 sets a zero!`
            scoreA = 0;
            scoreB = 0;
            setB = 0;
            atualizarPlacar()
        }
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