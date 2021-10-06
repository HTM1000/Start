const array = [70, 70, 80];

console.log(mediaDoAluno(array))

function mediaDoAluno(notas){
    const soma = 0;
    for (let nota of notas){
        soma += notas;
    }
    const media = soma/(notas.length)
    if (media >= 0 && media <= 59){
        return 'F'
    } else if(media <= 69){
        return 'D'
    } else if(media <= 79){
        return 'C'
    } else if(media <= 89){
        return 'B'
    } else if(media <= 100){
        return 'A'
    }
}