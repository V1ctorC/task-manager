const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET request are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('The site is currently down. Please try later')
// })

app.use(express.json())

//Routers
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('604907ad1e18ac10bbde3509')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('604905a3b059e5103c6d482f')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()