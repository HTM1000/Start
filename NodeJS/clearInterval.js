//clearInterval cancelar um setInterval que foi registrado

const time = 1000
const checar = () => console.log('checado')
let timer = setInterval(checar,time)

setTimeout(() => clearInterval(timer), 3000)