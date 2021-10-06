// throw

function meuNome(name = ''){
    if (name === '') {
        throw new Error("Deu ruim")
    }

    console.log("depois do erro")
}

// try... catch
try {
    meuNome()
} catch (e) {
    console.log(e)
}

console.log("depois do erro") //se houver uma aplicacao sem o try catch somente com o throw, a aplicacao para de funcionar completamente
