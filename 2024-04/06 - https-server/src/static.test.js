import { describe, it } from '@jest/globals'
import staticServer from './static.js'

describe('Файловый сервер', () => {
  let server
  let port

  beforeAll(() => {
    server = staticServer('static/', 0)
    port = server.address().port
  })

  afterAll(() => {
    server.close()
  })

  it('is function', () => {
    expect(typeof staticServer).toBe('function')
  })

  it('should return index.html', async () => {
    const response = await fetch(`http://127.0.0.1:${port}/index.html`)

    expect(response.status).toBe(200)

    const data = await response.text()
    expect(data).toEqual(expect.stringMatching(/Hello, OTUS/))
  })

  it('should return 404 if not found page', async () => {
    const response = await fetch(`http://127.0.0.1:${port}/vitily.html`)

    expect(response.status).toBe(404)

    const data = await response.text()
    expect(data).toEqual(expect.stringMatching(/404/))
  })
})
