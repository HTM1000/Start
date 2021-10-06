function verificar(){
    let num = document.querySelector('input#num')
    let res = document.querySelector('div#res')

    

    if(num.value > 17){
        res.innerHTML = `Maior de idade`
    } else {
        res.innerHTML = `Menor de idade`
    }
}