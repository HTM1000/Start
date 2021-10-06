exibir(10)
function exibir(limite){
    for (let i = 0; i <= limite; i++){
        if(i % 2 === 0){
            console.log(`Par: ${i}`)
        } else {
            console.log(`Impar: ${i}`)
        }
    }
}