const clientConnect = require('./client')

;(async () => {
    const client = await clientConnect.run()


    await client.close()
})()
