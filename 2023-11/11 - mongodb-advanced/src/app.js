const clientConnect = require('./client')

;(async () => {
  const client = await clientConnect.run()
  const db = client.db('otus_9_02')
  const songCollection = db.collection('songs')

  const filterSongByGenre = {
    '$match': {
      'genre': 'Metal'
    }
  }

  const groupByArtistAndSumDownloads = {
    '$group': {
      '_id': '$artist',
      'totalDownloads': {
        '$sum': '$downloads'
      }
    }
  }

  const sortByTotal = {
    '$sort': {
      'totalDownloads': -1
    }
  }

  const data = await songCollection.aggregate([
      filterSongByGenre,
      groupByArtistAndSumDownloads,
      sortByTotal
    ]).toArray()

  console.log(data)

  client.close()
})()
