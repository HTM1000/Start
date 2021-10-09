const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (mensagem) => console.log('voce foi escutado', mensagem))

ev.emit('saySomething', 'Henrique')

/*------------------------------------------------------------------------------*/
const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.once('saySomething', (mensagem) => console.log('voce foi escutado', mensagem)) //ouvir uma unica vez

ev.emit('saySomething', 'Henrique')

/*------------------------------------------------------------------------------*/


const {inherits} = require('util')
const {EventEmitter} = require('events')

function caracter (name){
    this.name = name
}

inherits(caracter, EventEmitter)
const heroi = new caracter('Chapolim')
heroi.on('help', () => console.log(`Eu o ${heroi.name} colorado`))

console.log('oh! e agora quem podera me defender?')
heroi.emit('help')