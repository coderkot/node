
const clientConnect = require('./client')

;(async () => {
    const client = await clientConnect.run()
    const db = client.db('validation_example')
    await db.createCollection("users", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: [ "username", "email", "age" ],
                properties: {
                    username: {
                        bsonType: "string",
                        pattern: "^[a-zA-Z0-9_]+$"
                    },
                    email: {
                        bsonType: "string",
                        format: "email"
                    },
                    age: {
                        bsonType: "int",
                        minimum: 18,
                        maximum: 150
                    }
                }
            }
        }
    })

    // db.collection('users').validate()

    await client.close()
})()

