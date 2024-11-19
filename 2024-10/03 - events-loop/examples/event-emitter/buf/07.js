const EventEmitter = require('events')

class MyEmitter extends EventEmitter {
  constructor() {
    super()

    this.oldEmits = []
  }

  on(event, handler) {
    // Первый ли подписчик
    if (this.listeners(event) <= 0) {
      for (let oldEmit of this.oldEmits) {
        handler.apply(null, oldEmit.payload)
      }
    }

    super.on(event, handler)
  }

  emit(event, ...payload) {
    // Есть ли подписчики
    if (this.listeners(event) > 0) {
      super.emit(event, payload)
    } else {
      this.oldEmits.push({ event, payload })
    }
  }
}

class MyThing extends MyEmitter {
  constructor() {
    super()
    
    this.emit('thing1')
  }
}

const mt = new MyThing()

mt.on('thing1', function onThing1() {
  console.log('thing1') // Показывалось всегда
})

// Холодную подгрузку событий
