//clearTimeout cancelar um timeout
const time = 3000
const final = () =>  console.log('feito')

let timer = setTimeout(final, time)
clearTimeout(timer)