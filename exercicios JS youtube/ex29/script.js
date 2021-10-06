const primeiro = [1, 2 ,3]
const segundo = [4, 5, 6]

//const combinado = primeiro.concat(segundo) combinar
const combinado = [...primeiro,...segundo] 
console.log(combinado)
//const dividido = combinado.slice(1, 3)
const clonado = [...combinado]
console.log(clonado)