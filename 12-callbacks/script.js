
/*

------------------Callbacks-------------

*/
function exibirTela(dados) {
    console.log('Exibir na Tela', dados)
}


const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () => carregarFotos(exibirTela)


function carregarFotos(callback) {
    const xhttp = new XMLHttpRequest()

    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText)

            if (callback) {
                callback(response)
            }
        }
    }

    xhttp.send()

}