const fs = require('fs')

// Потому что pool не сформирован
setTimeout(() => console.log('timeout out')) // 2
setImmediate(() => console.log('immediate out')) // 3

fs.readFile('./12.js', (err, data) => {
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

// next
// timeout out
// immediate out
// fs
// next in
// immediate in
// timeout in

// webpack, vite


// 1 - самый высший, а 3 - самый низший
// class Queue {
//   addMicroTask(task) {
//     this.addTask(task, 2)
//   }

//   addMacroTask(task) {
//     this.addTask(task, 3)
//   }

//   addTask(task, priority) {

//   }
// }


/*
next
timeout out
immediate out
fs
next in
immediate in
timeout in
*/
