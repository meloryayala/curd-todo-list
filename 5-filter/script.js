


//----------------Filter-------------


const clientes = [
    { name: 'fulano', lastname: 'Da silva', age: 14 },
    { name: 'Ciclano', lastname: 'Santos', age: 18 },
    { name: 'Beltrano', lastname: 'Moreira', age: 20 },
]

const clientesMaiores = clientes.filter(cliente => cliente.age >= 18

    //if ternario- de uma linha só
    //return cliente.age >= 18 ? true : false
)


console.log(clientesMaiores)