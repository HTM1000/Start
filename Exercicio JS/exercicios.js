/* Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numerico para sistema de notas com caracteres A B C

90 para cima A
entre 80 - 89 B
entre 70 - 79 C
entre 60 - 69 D
menor que 60 - F

*/

let nota = 70

if (nota >= 90){
    console.log('Nota A')
} else if (nota >= 80 && nota <= 89){
    console.log('Nota B')
} else if (nota >= 70 && nota <= 79){
    console.log('Nota C')
} else if (nota >= 60 && nota <= 69){
    console.log('Nota D')
} else if (nota < 60 && nota >= 0){
    console.log('Nota F')
} else {
    console.log('Nota invalida')
}

/*
    Sistema gasto familiar

    Crie um objeto que possuirá 2 propriedades, ambas tipo array:
        receitas []
        despesas []

    Agora, crie uma funcao que ira calcular o total de receitas e depesas e ira mostrar uma mensagem se a familia esta com saldo positivo ou negativo, seguido do valor do saldo    

*/

let familia = {
    pagamento: [2000, 3200, 250],
    despesas: [1600, 500, 600, 200, 100]
}

function sum(array){
    let total = 0
    for(let value of array){
        total += value
    }
    return total
}
    
function balancoTotal(){
    const calculoDespesas = sum(familia.despesas)
    const calculoReceita = sum(familia.pagamento)
    const total = calculoReceita - calculoDespesas
    
    let balancetext = 'negativo'
    
    if (total >= 0) {
        balancetext = 'positivo'
    }
 
 console.log(`Seu saldo é ${balancetext}: ${total}`)
 
}

balancoTotal()

/*
    Celsius em Fahrenheit
        Crie uma funcao que receba uma string em celsius ou fahrenheit e faca a transformacao de uma unidade para outra

        C = (F -32) * 5/9
        F = C * 9/5 + 32

*/

function Temperatura(grau){
    const celsius = grau.toUpperCase().includes('C')
    const fahrenheit = grau.toUpperCase().includes('F')

    if (!celsius && !fahrenheit) {
        throw new Error('Grau nao identificado')
    }
    let trocagrau = Number(grau.toUpperCase().replace("F", ""));
    let form = (fahrenheit) => (fahrenheit -32) * 5/9
    let Grau = 'C'
    
    if(celsius) {
    trocagrau = Number(grau.toUpperCase().replace("C", ""));
    form = (celsius) => celsius * 9/5 + 32
    Grau = 'F'
    }
    
    return form(trocagrau) + Grau
}

    try{
        console.log(Temperatura('32F'))
    }   catch (erro){
            console.log(erro.message)
        }

/*
    Buscando e contando dados no Array

    Buscando no Array de livros por categorias abaixo, faca o seguinte desafio

    contar o numero de categorias e o numero de livros em cada categoria
    contar numero de autores
    mostrar livros do autor Augusto Cury
    Transformar a funcao acima em uma funcao que ira receber o nome do autor e devolver os livros desse autor

*/

const CategoriaLivro = [
    {
        categoria: "Riqueza",
        livro: [
            {
                titulo: "Os segredos da mente milionária",
                autor: "T. Harv Eker",
            },
            {
                titulo: "O homem mais rico da Babilônia",
                autor: "George S. Clason",
            },
            {
                titulo: "Pai rico, pai pobre",
                autor: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        categoria: "Inteligencia Emocional",
        livro: [
            {
                titulo: 'Voce é insubstituivel',
                autor: 'Augusto Cury',
            },
            {
                titulo: "Ansiedade – Como enfrentar o mal do século",
                autor: "Augusto Cury",
            },
            {
                titulo: "Os 7 hábitos das pessoas altamente eficazes",
                autor: "Stephen R. Covey",
            },
        ],


    },

]

const totalCategoria = CategoriaLivro.length

for(let categoria of CategoriaLivro){
    console.log('Total de livros da categoria: ', categoria.categoria)
    console.log(categoria.livro.length)
}

function contarAutor(){
    let autores = [];

    for(let categoria of CategoriaLivro){
        for(let livro of categoria.livro){
            if(autores.indexOf(livro.autor) == -1) {
                autores.push(livro.autor)
            }
        }
    }

    console.log('Total de autores ', autores.length)
}

contarAutor()

function livrosAuguto(){
    let augustoescrita = [];

    for(let categoria of CategoriaLivro){
        for(let livro of categoria.livro){
            if(livro.autor === 'Augusto Cury') {
                augustoescrita.push(livro.titulo)
            }
        }
    }

    console.log('Livros do autor ', augustoescrita)
}
livrosAuguto()

function livrosAutores(autor){
    let autoresLivros = [];

    for(let categoria of CategoriaLivro){
        for(let livro of categoria.livro){
            if(livro.autor === autor) {
                autoresLivros.push(livro.titulo)
            }
        }
    }

    console.log(`Livros do autor ${autor}: ${autoresLivros.join(", ")}`)

}

livrosAutores('George S. Clason')