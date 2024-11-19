console.log('script start')

setTimeout(function () {
  console.log('setTimeout') // 1
}, 0)

Promise.resolve()
  .then(function () {
    console.log('promise1') // 2
  })
  .then(function () {
    console.log('promise2') // 3
  })

console.log('script end') // 4

// 2, 3, 4, 1

/*
script start
script end
promise1
promise2
setTimeout
*/

/* Это последовательность задач
 * Каждый прямоугольник тоже имеет свой стек.
 * То есть это массив задачи. По FIFO
 * 
 * timers -> system -> poll(здесь ждем) ->
 */

// setImmediate - таймер немедленного вызова.

// Ситуация. Запустился loop, но в pool нет задач.
