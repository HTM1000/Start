const pergunta = [
    'o que aprendi hoje?',
    'o que me deixou triste? o que eu poderia fazer para melhorar?',
    'o que me deixou feliz hoje?',
    'quantas pessoas ajudei hoje?'
]

const resposta = (index = 0) => {
     process.stdout.write("\n\n" + pergunta[index] + " > ")
}

resposta()

const answers = []
process.stdin.on('data', (data) => {
    answers.push(data.toString().trim() + "\n")
    if (answers.length < pergunta.length) {
        resposta(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Show!!
    o que voce aprendeu hoje foi: ${answers[0]}

    o que te aborreceu e voce poderia melhorar foi: ${answers[1]}

    o que te deixou feliz foi: ${answers[2]}

    voce ajudou ${answers[3]} pessoas hoje!!

    Amanha teremos mais reflexoes
    `)
})