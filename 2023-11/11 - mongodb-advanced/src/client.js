const { MongoClient } = require('mongodb');
const url = "mongodb://root:example@localhost:27017";
// <protocol>://<username>:<password>@<domain>:<port>/<database>

module.exports = {
  async run() {
    const client = await MongoClient.connect(url)

    console.log("Client started!");

    return client
  }
}