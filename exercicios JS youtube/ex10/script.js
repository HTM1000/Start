
radar(60)
function radar(velocidade){
   const velocidademax = 60
    if(velocidade <= velocidademax){
        console.log('voce esta na velocidade permitida')
    } else {
        const pontos = Math.floor(((velocidade - velocidademax)/5));
        if(pontos >= 12){
            console.log('CNH suspensa')
        } else {
            console.log('Pontos ' + pontos)
        }
    }
}