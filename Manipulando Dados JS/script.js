/*  
    Prototype 

    prototype base language
    prototype chains
    __proto__

*/

/*
    Type conversion (typecasting) vs type coersion

    Alteracao de um tipo de dado para outro tipo

*/

 console.log("9" + 5) //coercitivamento transformou o number em uma string
 console.log(Number("9") + 5) //converteu a string em number, fazendo assim a soma agora

 
//Manipulando String x Number
//Transforme um number em string e uma string em number

let string = "123"
console.log(Number(string)) //quando é numeral, o numero fica de cor diferente no devtools
let number = 321
console.log(String(number))

//contar quantos caracteres tem uma palavra e quantos digitos tem um numero
let word = "Paralelepipedo"
console.log(word.length)
let number = 4321
console.log(string(number.length)) //numero nao funciona com lenght, necessario ser string

//transforme um numero quebrado com 2 casas decimais e troque ponto por virgula
let number = 982.191872
console.log(number.toFixed(2).replace(".", ",")) //foi transformado em string pois a virgula nao é uma ideia de numero, podemos atrelar varios metodos

//transforme letras minusculas em maiusculas e faca o inverso tambem
let word =  "pregramar é bacana"
console.log(word.toLowerCase) //tudo minusculo
console.log(word.toUpperCase) //tudo maiusculo

//separe um texto que contem espacos, em um novo array onde cada texto é uma posicao do array. Depois disso, transforme o array em um texto onde era espacos, coloque _

let texto = "Eu quero viver o Amor"
let myArray = texto.split(" ") //atraves do split transformou o string em array
console.log(myArray)
let textounderline = myArray.join("_") //atraves do join transformou o array em string
console.log(textounderline.toLowerCase())

//verifique se o texto contem a palavra amor

let palavra = "Eu quero viver!"
console.log(palavra.includes(amor)) //procura a palavra que esta dentro do (), faz diferenca a palavra ter letra maiuscula ou minuscula

//crie um array com construtor
let myArray = new Array['a', 'b', 'c']
console.log(myArray)

//contar elementos de um array
console.log([
    "a", 
{type: "array"}, 
function(){return "alo"}].length)

console.log(['a', 'b', 'c'].length)

//transforme uma cadeia de caracteres em elementos de um array
let word = 'manipulação'
console.log(Array.from(word)) 

//utile a let abaixo e facas as seguintes modificacoes 

let teachs = ["html", "css", "js"]

//adicione um item no fim

teachs.push('nodejs')

//adicionar no comeco

teachs.unshift(sql)

//remover do fim

teachs.pop()

//remover do comeco

teachs.shift()

//pegar somente alguns elementos do array

console.log(teachs.slice(1, 3)) //primeiro argumento é ate qual eu quero esolher e no segundo devo colocar realmente comecando do 1 ate aonde eu quero que ele me mostre 

//remover um ou mais itens em qualquer posicao do Array

teachs.splice(1, 1) //comeca a contar a partir do index do primeiro argumento

//encontrar uma posicao de um elemento no array
let index = teachs.indexOf('css')

console.log(teachs)
console.log(index)
