class EventEmitter {
  constructor() {
    this.listners = [] // Список обработчиков
  }

  on(event, handler) {
    // На on их регистрируем
    this.listners.push({ event, handler })
  }

  emit(event, payload) {
    // На emit
    for (let listener of this.listners) {
      if (listener.event === event) {
        listener(payload) // Он синхронный
      }
    }
  }
}
