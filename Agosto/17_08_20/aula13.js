
const pegaTexto = document.querySelector(".guardar");

pegaTexto.addEventListener('click', () => {
    entrada = quest01();

    console.log(quest10(entrada));

})

function quest01(){
    resp = document.querySelector("#algo").value;
    return resp;
}

function quest02(resposta){
    if(resposta.includes("desenvolvimento")){
        alert("Sim!");
    } else {
        alert("Não!")
    }
}

function quest03(email){
    let emailCorreto = '';
     emailCorreto = email.trim().toLowerCase();
     return emailCorreto;
}

function quest04(cpf){
    let cpfPadrao = '';

    for(let i = 0; i < cpf.length; i++){
        if(cpf[i] === '.'){
            cpfPadrao += cpf[i].replace('.', '');
        } else if (cpf[i] === '-'){
            cpfPadrao += cpf[i].replace('-', '');
        } else {
            cpfPadrao += cpf[i] 
        }
    }
    return cpfPadrao;
}

function quest05(frase){
    let capitalized = '';

    for(let i = 0; i < frase.length; i++){
        if(i === 0){
            capitalized += frase[i].toUpperCase();
        } else if (frase[i-1] === ' ' && typeof(frase[i]) === "string"){
            capitalized += frase[i].toUpperCase();
        } else{
            capitalized += frase[i].toLowerCase();
        }
    }
    return capitalized;
}

function quest06(frase) {
    let retornaContrario = '';

    const arrayBolha = frase.split(' ');
    let cont = arrayBolha.length-1;

    while(cont >= 0){
        retornaContrario += arrayBolha[cont] + ' ';
        cont--
    }
    retornaContrario = retornaContrario.trim();
    console.log(retornaContrario); 
}

function quest07(frase) {
    let muitoEmCaixaAlta = '';
    muitoEmCaixaAlta = frase.replaceAll(/muito/gi, 'MUITO');
    return muitoEmCaixaAlta;
}

function quest08(numero) {
    let ultimos4Digitos = numero.trim().split(' ')[3];
    let cartaoNovo = '';

    cartaoNovo = ultimos4Digitos.padStart(19, '**** ');

    return cartaoNovo;
}

function quest09(cep) {
    let formatoDeCep = '';

    if(cep.length === 8) {
        formatoDeCep += (cep.slice(0, 5) + '-' + cep.slice(5,8))
        return formatoDeCep;
    } else{
        console.log('Um cep tem pelo menos 8 dígitos... Tente novamente.')
    } 
}

function quest10(tel){
    let telAjustado = '';

    if(tel < 8){
        console('O numero tem que ter pelo menos oito dígitos... Tente novamente.')
    } else{
        if(tel.length === 9){
            telAjustado += tel.slice(0, 5) + '-' + tel.slice(5, 10);
            return telAjustado;
        } else if(tel.length === 8){
            telAjustado += '9' + tel.slice(0, 4) + '-' + tel.slice(4, 10);
            return telAjustado
        } else if(tel.length === 10){
            telAjustado += `(${tel.slice(0,2)})` + ' 9' + tel.slice(2, 6) + '-' + tel.slice(6, 10);
            return telAjustado
        } else if(tel.length === 11){
            telAjustado += `(${tel.slice(0,2)})` + ' ' + tel.slice(2, 7) + '-' + tel.slice(7, 11);
            return telAjustado
        } else {
            console.log('Algo de errado não está certo... confira seu Tel');
            return 0;
        }
    }
}





















// pegaTexto.addEventListener('click', () => {
//     const resp = quest01();
//     quest02(resp)

// })

// function quest01(){
//     let entrada = '';
//     entrada = document.querySelector("#algo").value;
//     console.log(entrada)
//     return entrada

// }

// function quest02(resposta){
//     if(resposta.includes("desenvolvimento")){
//         alert("Sim!")
//     }else {
//         alert("Não!")
//     }
// }



