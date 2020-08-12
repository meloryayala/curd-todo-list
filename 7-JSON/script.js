
/*

------------------JSON-------------

Javascript Object Notation
É o modo de comunicação entre sistemas

antes se comunicavam com o XML, que é mais parecida com HTML


*/

const object = {
    nome: 'fulano',
    idade: 23,
}

const json = JSON.stringify(object)

const jsonParseado = JSON.parse(json)

console.log(jsonParseado.idade)