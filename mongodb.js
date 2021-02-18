const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Victor',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Victor',
    //         age: 26
    //     }, {
    //         name: 'Pierre',
    //         age: 18
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Task number 1',
            completed: true
        }, {
            description: 'Task number 2',
            completed: false
        }, {
            description: 'Task number 3',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            console.log('Enable to insert document')
        }

        console.log(result.ops)
    })
})