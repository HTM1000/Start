// for ... in

let person = {
    name: 'Henrique',
    age: 20,
    weight: 95

}

for (let property in person){
    console.log(property)
    console.log(person[property])
}