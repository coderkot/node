const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  setTimeout(() => {
    const timeoutObj = setTimeout(() => {
      console.log('timeout')
    }, 0)
    
    setImmediate(() => {
      console.log('immediate 1')
    })

    setImmediate(() => {
      console.log('immediate 2')
    })

    setImmediate(() => {
      console.log('immediate 3')
    })

    Promise.resolve().then(() => {
      console.log('promise 1')
    })

    process.nextTick(() => {
      console.log('nextTick')
    })
    
    console.log('test')
  
    console.log(`Server running at http://${hostname}:${port}/`)
  })
})
