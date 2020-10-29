


const aluno = {
    nome: 'Maria',
    sobrenome: 'da Silva',
    notas: [7, 10, 8, 5, 7, 9],
}

const {
    nome,
    sobrenome,
    notas,
} = aluno



//O zero declaramos para o valor inicial do acumulador
const mediaNotas = notas.reduce((acumulator, current) => acumulator + current, 0) / notas.length;

console.log(`A média da maria foi ${Math.ceil(mediaNotas)} para o total de ${notas.length} bimestres.`);
