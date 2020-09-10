
/*

------------------AJAX-------------2005

Asyncronous JavaScript and XML

Rotas

Endpoint

*/

const xhttp = new XMLHttpRequest()

xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)

xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.responseText)

        console.log(response[0])
    }
}

xhttp.send()
