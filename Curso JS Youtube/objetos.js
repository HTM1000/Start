let amigo = {nome: 'José', 
             sexo: 'M', 
             peso: 85.6,
             engordar(p=0){
                 console.log('engordou')
                 this.peso += peso
            }}

amigo.engordar(2)
console.log(`${amigo.nome}, pesa ${amigo.peso}`)