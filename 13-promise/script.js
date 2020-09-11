
/*

------------------Promise(promessa)-------------

*/
function exibirTela(dados) {
    console.log(dados)
}


function exibirErro() {
    console.log('Ooops, deu erro!')
}


const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () =>
    carregarFotos()
        .then(exibirTela)
        .catch(exibirErro)


function carregarFotos() {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()

        xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photossss', true)

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                const response = JSON.parse(this.responseText)

                resolve(response)
            }

            if (this.status === 404) {
                reject()
            }
        }

        xhttp.send()

    })

}