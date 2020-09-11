
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
    fetch('https://jsonplaceholder.typicode.com/photossss', 'GET')
        .then(exibirTela)
        .catch(exibirErro)


function fecht(url, method) {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()

        xhttp.open(method, url, true)

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