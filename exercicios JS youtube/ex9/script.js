//divisivel por 3 => fizz
//divisivel por 5 => buzz
//divisivel por 5 e 3 => fizzbuzz
//nao divisivel por 5 e 3 => retorna o numero de
//se nao passar um number => NaN
const res = fizzBuzz(10)
console.log(res)

function fizzBuzz(entrada){
    if (typeof entrada != 'number'){
        return 'nao é um numero'
    } else if (entrada%3 === 0 && entrada%5 === 0){
        return 'fizzBuzz'
    } else if (entrada%5 === 0){
        return 'Buzz'
    } else if(entrada%3 === 0){
        return 'fizz'
    } else {
        return entrada
    }
}