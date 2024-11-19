console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0)

setImmediate(() => {
  console.log('setImmediate');
})

process.nextTick(() => {
  console.log('nextTick');
})

Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');
  })

console.log('script end');
