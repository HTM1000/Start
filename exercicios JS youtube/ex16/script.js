exibirPrimos(15)

function exibirPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        let ehPrimo = true;

        for(let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0){
                ehPrimo = false
                break
            }
        }

        if (ehPrimo){
            console.log(numero)
        }
    }
}