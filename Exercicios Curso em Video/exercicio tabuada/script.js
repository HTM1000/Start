function tabuada(){
    let multiplicador = window.document.getElementById('txtM')
    let tab = window.document.getElementById('seltab')

    if (multiplicador.value.length == 0){
        window.alert('[ERRO] Digite um numero')
    } else {
        let multi = +multiplicador.value 
        let contador = 1
        tab.innerHTML = ""
        while (contador <= 10){
            let item = document.createElement('option')
            item.text = `${multi} x ${contador} = ${multi*contador}`
            item.value = `tab${contador}`
            tab.appendChild(item)
            contador++
        }
    }


}