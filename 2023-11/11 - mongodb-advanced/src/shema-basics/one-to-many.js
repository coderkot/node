const users = [
    {
        "_id": ObjectID("AAF1"),
        "name": "Kate Monster",
        "orders": [ObjectID("ADF9"), ObjectID("AE02"), ObjectID("AE73")]
    }
]

const orders = [
    {
        "_id": ObjectID("ADF9"),
        "description": "Write blog post about MongoDB schema design",
        "due_date": ISODate("2014-04-01"),
        "owners": [ObjectID("AAF1"), ObjectID("BB3G")]
}
]