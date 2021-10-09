// modulos nativos
const path = require('path')
console.log(path.basename(__filename))

// meu modulos
const meuModulo = require('./export.js')
console.log(meuModulo)