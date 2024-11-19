const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

function handler(payload) {
  console.log('an event occurred!')
}

function handler2(payload) {
  console.log('an event occurred 2!')
}


// Подписались
myEmitter.on('event', handler)
myEmitter.on('event', handler2)

myEmitter.emit('event')

myEmitter.off('event', handler)


myEmitter.emit('event')
