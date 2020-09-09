
/*

------------------Sincrono vs assincrono-------------

by default é sincrono, ou seja se a primeira funçao nao tivesse
o setTimeout, a segunda funáo teria que esperar a pimeira ser executada primeiro
e só entao a segunda seria executada.
*/

function primeira() {
    console.log('primeira')
}

function segunda() {
    console.log('segunda')
}

//assincrono
setTimeout(primeira, 2000)

segunda()