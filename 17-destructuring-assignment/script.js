
/*

-----------------Destructuring assigment-------------
desestruturção de atribuição

É muito útil para poder acessar os itens de objetos
*/

const obj = {
    nome: 'fulano', 
    idade: 35,
};


//Para acessar os itens poderia ser assim
//  -> const nome = obj.nome
//  -> const idade = obj.idade
//Mas se eu tiver vários itens dentro de um objeto,
// terei que fazer isso para cada um

const {
    nome: nomeDoUsuario,
    idade,
} = obj




function transformarJson(response) {
    return response.json()
}

function exibirTela(dados) {
    console.log(dados)
}


function exibirErro() {
    console.log('Ooops, deu erro!')
}


const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = aoClicarNoBotao

async function aoClicarNoBotao() {
    const dados = await fetch('https://jsonplaceholder.typicode.com/photos/1')
        .then(transformarJson)
        .catch(exibirErro)

    const { name, email, phone } = dados

    console.log(nome, email, phone)


}