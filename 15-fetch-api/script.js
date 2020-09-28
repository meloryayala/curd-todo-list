
/*

------------------Fetch-------------

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

botaoCarregar.onclick = () =>
    fetch('https://jsonplaceholder.typicode.com/photos', {
        method: 'POST'
        //onjeto que as configurações, pode ser aqui ou uma variavel
        //declarada fora da função
    })
        .then(transformarJson)
        .then(exibirTela)
        .catch(exibirErro)

