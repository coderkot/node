// const { setImmediate: setImmediatePromise } = require('node:timers/promises');

let counter = 0;

const timeout = setTimeout(function fun() {
  console.log(`timeout: ${++counter}`);

  timeout.refresh()
}, 2000);

timer();

function timer() {
  setTimeout(function fun() {
    // Может занимать ms
    console.log(`timeout: ${++counter}`);
  
    timer()
  }, 2000);
}

async function delay(ms) {
  return new Promise(res => {
    setTimeout(res, ms);
  })
}
