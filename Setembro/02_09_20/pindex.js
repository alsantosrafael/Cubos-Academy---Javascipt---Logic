
//Funções de transformação
const transformaNome = (nome) => {
    const nomeQuebrado =  nome.trim().split(' ')
    const novaLista = nomeQuebrado.map(x => {
      return x[0].toUpperCase() + x.slice(1, x.length)
    })
  
    const novoNome = novaLista.join(' ')
    return novoNome;
}

const transformaIdade = (idade) => {
    let novaIdade = '';
  
    if(Number(idade) > 1) {
      novaIdade = idade + ' anos';
    } else {
      novaIdade = idade + ' ano';
    }
    return novaIdade;
  }

const transformaCpf = (cpf) => {
    const novoCpf = cpf.slice(0, 3) + '.' + cpf.slice(3,6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9,11)
    return novoCpf;
}

const transformaTel = (tel) => {
    let novoTel = '';
      if(tel.length === 8) {
        novoTel = '(071) 9' + tel.slice(0,4) + '-' + tel.slice(4,9);
    
      } else if(tel.length === 9) {
        if(tel[0] !== 9){
          novoTel = '(071) ' + '9' + tel.slice(1,5) + '-' + tel.slice(5,9);
        } else if(tel[0] === '9') {
              novoTel = '(071) ' + tel.slice(0,5) + '-' + tel.slice(5,9);
        }
      } else if(tel.length === 11) {
        novoTel = '(' + tel.slice(0,2) + ') ' + tel.slice(2, 7) + '-' + tel.slice(7, 12);
      }
    
      return novoTel;
}


const caixa = document.querySelector(".dados");
const objetoPessoa = JSON.parse(localStorage.getItem("cadastroPessoal")) 

if(localStorage.getItem("cadastroPessoal") === null) {
    const h2 = document.createElement("h2");
    h2.innerText = "Vish... deu ruim... não temos dados cadastrados"

    caixa.append(h2)
    
} else {
    const p = document.createElement("p");
    p.innerText = transformaNome(objetoPessoa.nome) + '\n' + 
    transformaIdade(objetoPessoa.idade) + '\n' + transformaCpf(objetoPessoa.cpf) +
    '\n' + objetoPessoa.email + '\n' + transformaTel(objetoPessoa.tel)
    
    caixa.append(p)
}

