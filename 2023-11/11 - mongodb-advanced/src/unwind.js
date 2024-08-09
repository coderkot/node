const clientConnect = require('./client')

;(async () => {
    const client = await clientConnect.run()

    const db = client.db('otus_9_02');
    const orderCollection = db.collection('orders')

    // Создадим коллекцию товаров
    // await orderCollection.insertMany([
    //     { "_id" : 1, "meta: { "fields": [] }, ""items" : [ { "sku" : "A", "qty" : 2 }, { "sku" : "B", "qty" : 1 } ] },
    //     { "_id" : 2, "items" : [ { "sku" : "C", "qty" : 3 }, { "sku" : "D", "qty" : 1 } ] },
    //     { "_id" : 3, "items" : [ { "sku" : "A", "qty" : 1 }, { "sku" : "B", "qty" : 2 } ] },
    // ])
    // { "sku" : "A", "qty" : 2 }, { "sku" : "B", "qty" : 1 }, { "sku" : "C", "qty" : 3 }, { "sku" : "D", "qty" : 1 }

     const response = await orderCollection.aggregate([
        {
            "$unwind": "$meta.fields"
        },
        {
            "$group": {
                "_id": "$items.sku",
                "totalQty": { "$sum": "$items.qty" }
            }
        }
    ]).toArray()

    console.log(response)

    await client.close()
})()


/*

 */

// db.orders.aggregate([
//     {
//         "$unwind": "$items"
//     },
//     {
//         "$group": {
//             "_id": "$items.sku",
//             "totalQty": { "$sum": "$items.qty" }
//         }
//     }
// ])