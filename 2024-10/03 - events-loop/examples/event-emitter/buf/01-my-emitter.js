// EventEmitter
// Первый методв on - подписка на события
// emit - это публикация событий.

class MyEmitter {
  constructor() {
    this.listeners = {} // Объект вида [key]: [] //
  }

  on(event, handler) {
    if ((event in this.listeners) === false) {
      this.listeners[event] = []
    }

    this.listeners[event].push(handler)
  }

  emit(event, payload) {
    if (!this.listeners[event]) {
      return
    }

    for (let handler of this.listeners[event]) {
      handler(payload)
    }
  }
}

const myEmitter = new MyEmitter()

myEmitter.on('event', (payload) => {
  console.log('an event occurred!', payload);
})

myEmitter.on('error', (payload) => {
  console.log('an error occurred!')
})

myEmitter.emit('event', { type: 'message' })
myEmitter.emit('error')
