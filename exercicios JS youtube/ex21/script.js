let valor = [
    {tooltip: 'até 700 reais', minimo: 0, valormax = 700},
    {tooltip: 'de 700 a 1000 reais', minimo: 700, valormax = 1000},
    {tooltip: 'de 1000 reais ou mais', minimo: 1000, valormax = 9999999}
]

//outra opcao

function FaixaPreco(tooltip, minimo, maximo){
    return {
        tooltip,
        minimo, 
        maximo
    }

}

let faixa2 = [
    FaixaPreco('a', 1, 100),
    FaixaPreco('b', 100, 1000),
    FaixaPreco('a', 1000, 10000)
]

//outra opcao

function PrecoFaixa(tooltip, minimo, maximo) {
    this.tooltip = tooltip;
    this.minimo = minimo;
    this.maximo = maximo;
}

let faixa3 = [
    new PrecoFaixa('d', 10, 20),
    new PrecoFaixa('e', 20, 30),
    new PrecoFaixa('f', 30, 40),

]

console.log(faixa)
console.log(faixa2)
console.log(faixa3)