 /*
funcao construtora
    nova expressao
    criar novo objeto
    é uma palavra chave

*/

function Pessoa(name) {
    this.name = name
    this.walk = function() {
        return "andando" + "esta andando"
    }
}

const Henrique = new Pessoa("Henrique")
const Joao = new Pessoa("Joao")
console.log(Henrique.walk())
console.log(Joao.walk())

let name1 = new String("Henrique")
console.log(name1)

let date = new Date(2021-05-01)
console.log(date)