
const alunos = [

    {
        nome: 'Maria',
        sobrenome: 'da Silva',
        nota: 10,
    },

    {
        nome: 'José',
        sobrenome: 'Moreira',
        nota: 4,
    },

    {
        nome: 'Paulo',
        sobrenome: 'Henrique',
        nota: 7,
    },

    {
        nome: 'Sara',
        sobrenome: 'Souza',
        nota: 5,
    },

    {
        nome: 'Clara',
        sobrenome: 'Barbosa',
        nota: 9,
    },

    {
        nome: 'Rodrigo',
        sobrenome: 'Barros',
        nota: 4,
    },

    {
        nome: 'Renato',
        sobrenome: 'Barros',
        nota: 7,
    },

    {
        nome: 'Andrea',
        sobrenome: 'Batista',
        nota: 6,
    },

    {
        nome: 'Carla',
        sobrenome: 'Campos',
        nota: 3,
    },

]


const lista = document.querySelector('#lista')
const formular = document.querySelector('#formular')
const buttonFiltrar = document.querySelector('#filtrar')
let textField = document.querySelector('#textField')

let nota = textField.value

function filtrarAlunos() {
    //alunos.filter
    console.log(nota)
};

buttonFiltrar.onclick = filtrarAlunos()
