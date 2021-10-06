let marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
]

let marca = marcas.find(function(marca){
    return marca.nome === 'a'
})

console.log(marca)