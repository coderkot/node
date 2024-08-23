import * as fs from 'node:fs'
import * as fps from 'node:fs/promises'
import * as http from 'node:http'
import * as path from 'node:path'

export default function (staticPath, port) {
  const server = http.createServer(async (req, res) => {
    const paths = [staticPath, req.url]
    
    if (req.url.endsWith('/')) {
      paths.push('index.html')
    }

    const filePath = path.join(...paths)
    try {
      const data = await fps.access(filePath)
      const stream = fs.createReadStream(filePath)
      stream.pipe(res)
      stream.on('error', (error) => {
        console.log('error', error)

        res.statusCode = 500
        res.end('"500. Internal error"')
      })
    } catch (error) {
      res.statusCode = 404
      res.end('"404. File is not found"')
    }
  }).listen(port)

  console.log(`Static server running at http://127.0.0.1:${server.address().port}`)

  return server
}
