

/*

----------------Arrow functions-------------

ES6

As funções de seta nos permitem escrever uma 
sintaxe de função mais curta.

*/


//forma curta Arrow function
const test = () => {

}

const teste1 = (param1, param2) => {
    console.log(param1 + param2)
}

teste1(1, 2)

//retorno implícito
const soma = (param1, param2) => param1 + param2

const resultado = soma(11, 2)

console.log(resultado)


// quando tem 1 parametro pode remover o parenteses
const teste = param1 => {
    console.log(param1)
}

console.log(teste('ok'))


//O arrow function trata de forma diferente o (this), pois tem acesso ao window
const botao = document.querySelector('#botao')

botao.onclick = () => {
    console.log(this)
}
