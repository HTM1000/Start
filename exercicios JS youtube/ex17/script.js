let endereco = {
    rua: 7,
    cidade: 'Rio claro',
    CEP: 13500500
}

function exibir(endereco) {
    for(let chave in endereco){
        console.log(chave, endereco[chave])
    }
}

exibir(endereco);