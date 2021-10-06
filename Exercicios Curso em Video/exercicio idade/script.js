function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById("txtano")
    var res = window.document.querySelector("div#res")

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade > 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'crianca_menino.jpg')
            } else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'jovem_menino.jpg')
            } else if (idade >= 21 && idade < 50){
                //adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
               // idoso
               img.setAttribute('src', 'veio.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
                if (idade > 0 && idade < 10){
                    //crianca
                    img.setAttribute('src', 'crianca_menina.jpg')
                } else if (idade >= 10 && idade < 21){
                    //jovem
                    img.setAttribute('src', 'jovem_menina.jpg')
                } else if (idade >= 21 && idade < 50){
                    //adulto
                    img.setAttribute('src', 'mulher.jpg')
                } else {
                   // idoso
                   img.setAttribute('src', 'veia.jpg')
                }
            } 
        }
        res.style.textalign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
} 