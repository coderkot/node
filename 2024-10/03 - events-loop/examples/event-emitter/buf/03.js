
const EventEmitter = require('events')

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter()


myEmitter.on('event', () => {
  // Обработчик события с код.
  console.log('an event 2 occurred!')
  // throw new Error('test')
})

// Подписались после публикации
myEmitter.on('event', () => {
  // Обработчик события с код.
  console.log('an event occurred!')
  // throw new Error('test')
})
myEmitter.emit('event')

// Что произодёт позже
console.log('after')
