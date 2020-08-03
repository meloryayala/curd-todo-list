

/*

--------------------Escopo-----------------------------
-> o escopo determina a visibilidade de uma variável
-> as funcões no JS criam o seu prórprio escopo
-- as variáveis de uma função não são acessíveis fora dela


-GLobal
-> Quando está fora e todos enxergam a variável e podem utilizar

-Local
-> Quando a variável está dentro de um escopo local e fica restrita apenas a esse "pai"

*/
function teste() {
    let a = 123
}
console.log(a)

teste()