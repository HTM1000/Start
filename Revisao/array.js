const animal = [
    'lion',
    'gato',
     {
        name = 'macaco',
        age = 7
    }
    
]

console.log(animal[0]) //pegar a posicao do vetor, comecando a partir do 0
console.log(animal.length) //acessar quantas linhas tem no array
console.log(animal[3]) //indefinido por nao possuir a posicao 3
console.log(animal[2].name) //pegando as definicoes do objeto no array
console.log(animal[1].name) //indefinido pois nao possui a variavel nome