const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne(
    //     {
    //         _id: new ObjectID('602eacba6dee0805129ac949')
    //     }, (error, user) => {
    //         if (error) {
    //             console.log('Unable to find user')
    //         }

    //         console.log(user)
    //     }
    // )

    // db.collection('users').find({ name: 'Victor'}).toArray((error, result) => {
    //     console.log(result)
    // })

    // db.collection('users').find({ name: 'Victor'}).count((error, count) => {
    //     console.log(count)
    // })

    db.collection('tasks').findOne({ _id: new ObjectID("602eaa052eafde0464bd8469") }, (error, result) => {
        console.log(result)
    })

    db.collection('tasks').find({ completed: false}).toArray((error, result) => {
        console.log(result)
    })
})