let numeros = [1, 2, 3, 4, 5]

numeros = [] // 1 solucao

numeros.length = 0 //2 solucao

numeros.splice(0, numeros.length) //3 solucao

while (numeros.length > 0) {
    numeros.pop() //4 solucao
}



