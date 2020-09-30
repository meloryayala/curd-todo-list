
/*

-----------------Async/Await-------------

*/

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
    const dados = await fetch('https://jsonplaceholder.typicode.com/photos')
        .then(transformarJson)
        .catch(exibirErro)


    console.log(dados)

}