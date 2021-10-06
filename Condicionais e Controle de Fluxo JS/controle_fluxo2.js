// switch

let expression = 'a'

switch(expression){
    case 'a': 
        console.log('a')
        break
    case 'b':
        console.log('b')
        break
    default: 
        console.log('default')
        break

}

let calculadora = function(num1, num2, operador){
    let result = 0;
    
    switch(operador){
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '/':
            result = num1 / num2
            break
        case '*':
            result = num1 * num2
            break
        default:
            console.log('nao implementado')
            break
    
    }
    
    return result

}

console.log(calculadora(4, "+", 8))