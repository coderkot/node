const EventEmitter = require('events')
const myEmitter = new EventEmitter()

myEmitter.on('event-error', () => {
  console.log('Show sync');

  throw new Error('test');
});

console.log('Before 1');
myEmitter.emit('event-error');
console.log('After 1');
