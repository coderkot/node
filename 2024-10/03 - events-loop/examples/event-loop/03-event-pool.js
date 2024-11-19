const fs = require('fs')

// Потому что pool не сформирован
setTimeout(() => console.log('timeout out')) // 2
setImmediate(() => console.log('immediate out')) // 3

fs.readFile('./examples/event-loop/03-event-pool.js', (err, data) => {
  // pool не сформирован
  console.log('fs') // 4

  process.nextTick(() => console.log('next in')) // 5
  setTimeout(() => console.log('timeout in')) // 7
  setImmediate(() => console.log('immediate in')) // 6
})

const next = () => {
  console.log('next') // 1
  //process.nextTick(next)
}

process.nextTick(next)
