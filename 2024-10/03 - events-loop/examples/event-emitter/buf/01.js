const EventEmitter = require('events');

// /*
// class EventEmitter

// // База
// on(event, handler) - подписка на нужное событие
// handler(payload) - обработчик события

// emit(event, payload1, payload2, ...) - испускание события.

// // Вспомогательные события
// once(event, payload) - подписаться но один раз.
// off(event, handler) - отписка от события.
// listeners(event) - сколько подписчиков
// maxEventListeners - по-умолчанию 10
// */


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

// for (let i = 0; i < 15; i++) {
//   myEmitter.on('event', handler)
// }

// console.log('before');
// // Опубликовали событие
// myEmitter.emit('event')
// console.log('after');

// console.log(myEmitter.listeners('event'));

// // Отписались
// myEmitter.off('event', newHandler)

// // Все опубликованные уже не попадают
// myEmitter.emit('event')
