function Contar(){
    let inicio = document.getElementById('txtIn')
    let final = document.getElementById('txtF')
    let pulo = document.getElementById('txtP')
    let res = document.querySelector('div#res')

    if (inicio.value.length == 0 || final.value.length == 0 || pulo.value.length == 0) {
        window.alert('[ERRO] Verifique os dados novamente')
    } else {
        res.innerHTML = `Contando: <br>`
        let i = +inicio.value
        let f = +final.value
        let p = +pulo.value

        if(p <= 0){
            window.alert('[ERRO] Passo invalido, considerando Passo = 1')  
            p = 1
        }

        if(i < f){
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }
        
        
    }
   
}