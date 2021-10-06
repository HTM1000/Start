//funcao anonima
const soma = function(num1, num2) {
    let total = num1+num2 //sem palavra chave das variaveis (var, let ou const) total so existe a partir que o programa funciona
    return total //parametros da funcao
 }
 
 let num1 = 20
 let num2 = 15 
 
 console.log("O numero 1 é" + num1)
 console.log("o numero 2 é" + num2)
 console.log(`A soma dos numeros é ${soma(num1, num2)}`)//argumentos da funcao executada
 //console.log(total) existiria a partir daqui caso nao houvesse a variavel let total