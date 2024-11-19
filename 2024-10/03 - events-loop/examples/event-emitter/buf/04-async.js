const fs = require('node:fs');
const { setTimeout } = require('node:timers/promises');
const EventEmitter = require('events')
const myEmitter = new EventEmitter()

myEmitter.on('event', async () => {
  await setTimeout(500);
  
  console.log('Show after timeout');
})

// Генераторы

// // Сделали тут таймаут на 0.5 с.
// myEmitter.emit('event')

// console.log('after');

// Код на JS/Node.JS

// Синхронным и асинхронным. Блокирующий и не блокирующий.

// const x = 1;
// const y = 2;

// const z = x + y;

// // Асинхронщина ранее
// // 1. Callback
// // 2. Promise -> создаем промис resolve/reject
// // 3. async/await -> синтаксический сахар для Promise


// new Promise((res, reject) => {
//   res(true)
// }).then()


// fs.readFile('./00.js', (err, data) => {
//   // Выполни эту функцию как прочитаешь

//   console.log('file was read');

//   fs.readFile('./00.js', (err, data) => {
//     // Выполни эту функцию как прочитаешь
  
//     console.log('file was read');
    
//     fs.readFile('./00.js', (err, data) => {
//       // Выполни эту функцию как прочитаешь
    
//       console.log('file was read');
      
//       fs.readFile('./00.js', (err, data) => {
//         // Выполни эту функцию как прочитаешь
      
//         console.log('file was read');
      
//       })
//     })
//   })
// })

// console.log('after')

// Блокирующие операции блокируют асихронный Event Loop
const data = fs.readFileSync('./00.js');


fs.readFile('./00.js', (err, data) => {
});


// Запрос к базе данных.
// 1. Формируем SQL запрос // NodeJS 
// 2. Клиент подключается к нашей базе данных и этот ей передает. // NodeJS + База данных
// 3. Сама база данных запрос выполняет // База данных
// 4. Возвращение результата в программу. // NodeJS + База данных

// 1 Обработчик этих асинхронных запросов на все клиенты.
// Event Loop(обработчик асинхронных операций).
// Очень важно не блокировать Event Loop.
// По максимуму выполняйте асинхронный.


// event - событий
// loop - цикл.

// Цикл событий

while (messageQueue.waitForEvents()) {
  messageQueue.runEvents(); 
  // Нету нормальной приоретизации microTasks, macroTasks;
  // 
}
