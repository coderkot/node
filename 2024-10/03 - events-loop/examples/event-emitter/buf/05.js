console.log('script start') // 1

// timer - это макро таска она выполнится на следующем проходе event Loop
setTimeout(function () {
  console.log('setTimeout') // 2
}, 0)

// setImmediate(() => {
//   console.log('setImmediate');
// })

process.nextTick(() => {
  console.log('nextTick');
})

// Как микро таски
Promise.resolve()
  .then(function () {
    console.log('promise1') // 3
  })
  .then(function () {
    console.log('promise2') // 4
  })

console.log('script end') // 5

// 1 - 5 - 3 - 4 - 2

/*
script start // синхронщина
new promise 1 // синхронщина
script end // синхронщина
new promise 2 // микро таски
promise1 // микро таски
promise2 // микро таски
setTimeout // макро таска
*/
