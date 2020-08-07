

/*

----------------Map-------------

*/


const clientes = [
    { name: 'fulano', lastname: 'Da silva' },
    { name: 'Ciclano', lastname: 'Santos' },
    { name: 'Beltrano', lastname: 'Moreira' },
]

//Monta para mim um array que retorne o nome e sobrenome dos clientes
let clientesFinal = []

clientes.forEach(function (cliente) {
    clientesFinal.push(cliente.name + ' ' + cliente.lastname)
})

console.log(clientesFinal)



// com o map
const clientesFinalMap = clientes.map(cliente => cliente.name + ' ' + cliente.lastname)

console.log(clientesFinalMap)

