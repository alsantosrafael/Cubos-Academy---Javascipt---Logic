
const cadastro = {}
const btn = document.querySelector(".salvar")

btn.addEventListener("click", () => {

    cadastro.nome = document.querySelector("#name").value
    cadastro.idade =  document.querySelector("#age").value
    cadastro.cpf = document.querySelector("#cpf").value
    cadastro.email = document.querySelector("#email").value
    cadastro.tel = document.querySelector("#tele").value
    
    const cadastroString = JSON.stringify(cadastro)
    localStorage.setItem("cadastroPessoal", cadastroString)
    location.href = 'pessoa.html'

})

console.log(cadastro)