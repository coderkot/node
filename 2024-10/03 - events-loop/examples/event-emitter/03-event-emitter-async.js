const { setTimeout } = require('node:timers/promises');
const EventEmitter = require('events')
const myEmitter = new EventEmitter()

myEmitter.on('sync-event', () => {
  const start = Date.now();

  while (Date.now() - start < 300) {
    Math.sqrt(Math.random() * Math.random());
  }

  console.log('Show sync');
  console.log('Show sync');
})


myEmitter.on('async-event', async () => {
  await setTimeout(500);
  
  console.log('Show after timeout');
})

console.log('Before 1');
myEmitter.emit('sync-event');
console.log('After 1');


console.log('Before 2');
myEmitter.emit('async-event');
console.log('After 2');
