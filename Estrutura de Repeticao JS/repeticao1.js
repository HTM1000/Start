// for

for(let i = 1; i <= 10; i++ ){
    console.log(i)
}

for(let i = 100; i >= 0; i-- ){
    console.log(i)
}

for(let i = 100; i >= 0; i-- ){
    if (i === 50){
        break //para a estrutra no termo pedido
    }
    console.log(i)
}

for(let i = 100; i >= 0; i-- ){
    if (i === 50){
        continue //pula a execucao no momento
    }
    console.log(i)
}
