// Operador condicional 

// Dependendo da condicao nos recebemos valores diferentes

//condicao entao valor 1 se nao valor 2
//condiction ? value1 : value2

// exemplos

//Cafe da manha top
let pao = true
let quiejo = true 
const nicebreakfast = pao || queijo ? 'cafe top' : 'cafe ruim'
console.log(nicebreakfast)

const nicebreakfast = pao && queijo ? 'cafe top' : 'cafe ruim'
console.log(nicebreakfast)

//Maior de 18   
let age = 16
const canDrive = age => 18 ? "pode dirigir" : "nao pode dirigir"
console.log(canDrive)