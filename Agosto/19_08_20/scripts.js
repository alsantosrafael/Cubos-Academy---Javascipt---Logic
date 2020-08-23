//Questão 01

// function procuraAcademy (lista) {
//    return lista.includes('academy');
// }

// let lista = ['aveia', 'leite', 'manteiga','feijoada', 'panela', 'acAdemy',];
// console.log(procuraAcademy(lista))

//Questão 02

// function encontraIndiceAcademy(lista) {
//     if(lista.indexOf('academy') === -1){
//         console.log('Não existe a palavra procurada nessa lista.')
//         return false
//     }
//     return lista.indexOf('academy')
// }
// let lista = ['aveia', 'leite', 'manteiga','feijoada', 'panela', 'academy'];
// console.log(encontraIndiceAcademy(lista))

//Questão 03

// function removeString(lista) {
//     for(let i = lista.length - 1; i >= 0; i--){
//         if(lista[i].length > 5){
//             lista.splice(i, 1);
//         }
//     }
//     return lista;
// }

// let lista = ['aveia', 'leite', 'manteiga','feijoada', 'panela', 'academy'];

// console.log(removeString(lista))

// Questão 04
//  function arrumaArray (lista){
//      novoTexto = ''
//      for(let i = 0; i < lista.length; i++){
//          if(i === lista.length - 1){
//              novoTexto += 'ou ' + lista[i] + '.'
//          } else if (i === lista.length - 2){
//             novoTexto +=  lista[i] + ' '
//          } else{
//             novoTexto +=  lista[i] + ', '
//          }
//      }
//      return novoTexto;
//  }

//  let lista = ['aveia', 'leite', 'manteiga','feijoada', 'panela', 'academy'];
//  console.log(arrumaArray(lista))

//Questão 05

// function ordenaArrayCrescente (lista) {
//     let arrayOrdenado = [];
//     let menor = lista[0];
//     let posMenor = lista.indexOf(menor);
    
//     while (lista.length !== 0){

//         for(let i = lista.length - 1; i >= 0; i--){
            
//             if(lista[i] < menor){
//                 menor = lista[i];
//                 posMenor = lista.indexOf(menor)
//             }
//         }
//             arrayOrdenado.push(menor)
//             lista.splice(posMenor, 1)
//             menor = lista[0];
//             posMenor = lista.indexOf(menor) 
//     }
//     return arrayOrdenado
// }

// let lista = [3, -7, 10, 0, 2, 5, -99];
// console.log(ordenaArrayCrescente(lista));

//Questão 05/2

// function ordenaArrayCrescente (lista) {
//     let arrayOrdenado = [];
//     let menor = lista[0];
//     let posMenor = lista.indexOf(menor);
    
//     while (lista.length !== 0){

//         for(let i = lista.length - 1; i >= 0; i--){
            
//             if(lista[i] < menor){
//                 menor = lista[i];
//                 posMenor = lista.indexOf(menor)
//             }
//         }
//             arrayOrdenado.push(menor)
//             lista.splice(posMenor, 1)
//             menor = lista[0];
//             posMenor = lista.indexOf(menor) 
//     }
//     return arrayOrdenado.reverse()
// }

// let lista = [3, -7, 10, 0, 2, 5, -99];
// console.log(ordenaArrayCrescente(lista));

//Questão 06

// function transformaTel (tel){
//     numero = tel.substr(tel.indexOf(')')+1, tel.length-1).replace('-','').trim()
//     return numero
// }

// const tel = '       +55(91) 99932-1232          '

// console.log(transformaTel(tel))


//Questão 07

// function testaEmail(email){
//     if(email.indexOf('.') === 0 || email.lastIndexOf('.') === email.length - 1 || email.indexOf('.') === -1){
//         return false
//     } else if(email.indexOf('@') === -1){
//         return false;
//     }else{
//         return true;
//     }
// }

// const email = 'insira.seuemail@aqui.com'

// console.log(testaEmail(email))