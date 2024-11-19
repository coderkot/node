const { setTimeout } = require('node:timers/promises');
const EventEmitter = require('events')
const myEmitter = new EventEmitter()

myEmitter.on('event', async () => {
  await setTimeout(500);
  
  console.log('Show after timeout');
})
