let num = [5, 2, 9, 8, 3]
num[5] = 7
num.push(1) //final
num.sort()
for(let pos=0; pos<num.length; pos++){
    console.log(num[pos])
}
for(let pos in num){
    console.log(num[pos])
}