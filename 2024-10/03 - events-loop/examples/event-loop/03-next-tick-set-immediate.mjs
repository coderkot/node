const start = () => {
  console.log('1');

  setImmediate(() => console.log('2'));

  new Promise((resolve, reject) => {
    resolve('3');
  }).then(resolve => {
    console.log(resolve);
    process.nextTick(() => console.log('4'));
  });
  
  process.nextTick(() => console.log('5'));
};
start();
\
