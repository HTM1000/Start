function calculo(){
    let num = document.querySelector('input#num')
    let res = document.querySelector('div#res')

    let total = num.value*num.value
    res.innerHTML = `O valor deste numero ao quadrado é: ${total}`
}