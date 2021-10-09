const express = require('express'); //chamando express e dando um require no modulo instalado
const app = express(); //instanciando o express e guardado em app

app.set('view engine', 'ejs'); //trocando .html para .ejs ---- set metodo dentro do express que esta instanciado em app

app.get('/', (req, res) => {
    const items = [{
        title: 'D',
        message: 'esensolvedor de software',
    },
    {
        title: 'E',
        message: 'JS usa javascript para renderizar HTML',
    },
    {
        title: 'M',
        message: 'uito facil de usar ',
    },
    {
        title: 'A',
        message: 'mor',
    },
    {
        title: 'I',
        message: 'nstall EJS',
    },
    {
        title: 'S',
        message: 'intaxe simples',
    }
    ];
    const subtitulo = 'uma linguagem de modelagem para criacao de paginas HTML utilizando JS'
    res.render('pages/index', {
        qualidade: items,
        subtitulo: subtitulo,
    }) //criando uma rota para acessar o site, renderizou (.render) e criou o arquivo chamado index
})

app.get('/sobre', (req, res) => {
    res.render('pages/about') //criando outra rota sobre "henrique.com.br/sobre"
})

app.listen(8080); //ouvindo uma porta que é a 8080, quando chamar irá rodar tudo que esta na porta 8080
console.log('Servidor Funcionando')