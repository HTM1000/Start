//funcao callback

function meuNome(name) {
    console.log('antes de executar callback')
    console.log(name)
    console.log('depois de executar callback')
}

meuNome(
    () => {
        console.log('estou em uma callback')
    }
)