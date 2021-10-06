Somar(10)
function somar(limite){
    let mul3 = 0
    let mul5 = 0
    for (i = 0; i<=limite; i++){
        if(i % 3 === 0){
            mul3+= i
        } else if(i % 5 === 0){
            mul5+= i
        }
    }
    console.log(mul3 + mul5)
} 