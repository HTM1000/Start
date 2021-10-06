//declare uma variavel com nome weight 
let weight

//que tipo de dado é a variavel acima?
console.log(typeof weight)

//declare variaveis (name, age, stars e isSubscribed com os respectivos dados (String, Integer, Float, Boolean))
let name = "Henrique" 
let age = 20 
let stars = 12.5
let isSubscribed = true 

let student = {
    name1: "Henrique",
    age1: 20,
    weight: 95.4,
    isSubscribed1: true
} 
    

//a variavel student é de qual tipo de dado?
console.log(typeof student) //objeto

//atribua a ela as mesma propriedades e valores do exercicio 3
let student = {
    name1: "Henrique",
    age1: 20,
    weight: 95.4,
    isSubscribed1: true
} 

/*mostre o console da seguinte mensagem
    <name> de idade <age> pesa <weight> kg
    substitua os entre <> pelos valores do objeto
*/
console.log(`${student.name1} de idade ${student.age1} pesa ${student.weight}kg`)

//crie um array students vazio
let students = []

//retribua valor para a variavel acima, colocando dentro dela o objeto student da questao 4
let students = [
    student
]

//coloque no console a posicao 0 no array acima
console.log(students[0])

//crie um novo student e coloque na posicao 1 do array students
let student1 = {
    name2: "Henrique",
    age2: 20,
    weight2: 94.2,
    isSubscribed2: true
}

let students = [
    student,
    student1
]

console.log(students[1])

/* qual a resposta do codigo e por que?  
    console.log(a)
    var = a
*/
// resposta será indefinida pois o var é uma coisa global e irá apresentar somente que ela existe para o console porem nao hávera valor por enquanto, sofrerá hoisting.

//se trocar o var por let?
//irá apresentar um erro pois let nao é uma variavel global assim nao sofre hoisting
