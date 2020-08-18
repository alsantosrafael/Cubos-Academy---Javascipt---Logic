function processarVotos(votosA, votosB, votosC) {
    //Sua resolução aqui
    quantVotos = [votosA, votosB, votosC];
    //Explicação do raciocínio, apliquei o método max do objeto Math e converti o resultado através do apply 
    //em um número. O max revela qual o valor máximo dentro do array

    if(votosA < votosB && votosA < votosC){
        imprimir(`A está em último e precisa de ${Math.max.apply(Math,quantVotos) - votosA} voto(s) para empatar com o primeiro colocado!`)
    } else if(votosB < votosA && votosB < votosC){
        imprimir(`B está em último e precisa de ${Math.max.apply(Math,quantVotos) - votosB} voto(s) para empatar com o primeiro colocado!`)
    } else if(votosC < votosA && votosC < votosB){
        imprimir(`C está em último e precisa de ${Math.max.apply(Math,quantVotos) - votosC} voto(s) para empatar com o primeiro colocado!`)
    }
}

//Não mexa em nada daqui pra baixo
let votosA = 0, votosB = 0, votosC = 0;

function imprimir(text) {
    document.getElementById("imprimir").innerHTML= text;
}

document.getElementById("a").addEventListener("click", () => {
    votosA++;
    document.getElementById("a").innerHTML = votosA;
    processarVotos(votosA, votosB, votosC);
});

document.getElementById("b").addEventListener("click", () => {
    votosB++;
    document.getElementById("b").innerHTML = votosB;
    processarVotos(votosA, votosB, votosC);
});

document.getElementById("c").addEventListener("click", () => {
    votosC++;
    document.getElementById("c").innerHTML = votosC;
    processarVotos(votosA, votosB, votosC);
});