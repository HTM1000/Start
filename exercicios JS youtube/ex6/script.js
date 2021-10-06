let num = document.getElementById('num')
let num2 = document.getElementById('num2')
let res = document.getElementById('res')


function mais(){
    total = +(num.value) + +(num2.value)
    res.innerHTML = `A soma dos numeros é ${total}`
}

function menos(){
    total = num.value - num2.value;
    res.innerHTML = `A subtração dos numeros é ${total}`
}