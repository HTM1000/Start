let num = [5, 2, 9, 8, 3]
num[5] = 7
num.push(1) //final
num.sort()
console.log(num)
console.log(`o primeiro indice é ${num[0]}`)
console.log(`numero de indices são ${num.length}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('valor nao encontrado')
} else{
    console.log(`o valor esta na posição ${pos}`)
}

