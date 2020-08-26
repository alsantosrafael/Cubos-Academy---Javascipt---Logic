//Declarando funções
const encerrarMissao = () => {
    img.setAttribute("src", "./imgs/rocket-19743.png")
    btn.innerText = 'Iniciar contagem regressiva!'
    caixaTexto.innerText = 'Preparando para contagem regressiva';
}

const contagemRegressiva = () => {

    if(contagem >= 0){
        caixaTexto.innerText = 'Contagem regressiva: ' + contagem;
        contagem--;
    } else{
        caixaTexto.innerText = 'Foguete lançado!!'
        img.setAttribute("src", "./imgs/giphy.gif")
        clearInterval(id);
        btn.innerText = 'Encerrar Missao!'
    }

}

//Capturando elementos do HTML
const btn = document.querySelector('.btn')
const caixaTexto = document.querySelector('.caixa-texto')
const img = document.querySelector("img")

//Declarando Variáveis
let contagem = 10;

//Adicionando ouvidor de eventos condicional
btn.addEventListener('click', () => {
    if(btn.innerText === 'Iniciar contagem regressiva!'){
        btn.innerText = 'Abortar missão!';
        id = setInterval(contagemRegressiva, 1000);//Repetição infinita até que eu sete a parada
    } else if (btn.innerText === 'Encerrar Missao!'){
        contagem = 10;
        encerrarMissao();
    } else if (btn.innerText === 'Abortar missão!'){
        btn.innerText = 'Iniciar contagem regressiva!';
        caixaTexto.innerText = 'Preparando para contagem regressiva';
        contagem = 10;
        clearInterval(id);//Parando setInterval
    }

})