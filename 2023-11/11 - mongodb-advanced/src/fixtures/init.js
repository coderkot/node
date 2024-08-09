const clientConnect = require('./../client')
const { getSong } = require('./song')

;(async () => {
  const client = await clientConnect.run()
  const db = client.db('otus_06_07')
  const songCollection = db.collection('songs')

  const songsCount = await songCollection.countDocuments()
  if (songsCount === 0) {
     for (let i = 0; i < 10_000; i++) {
       await songCollection.insertOne(getSong())
     }
     console.log('song added')
  }

  await client.close()
})()
