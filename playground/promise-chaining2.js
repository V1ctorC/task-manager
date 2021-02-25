require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6032a36b23a37411398d0a99').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const findTaskAndDelete = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

findTaskAndDelete('6035457ee295f61b02867e54').then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})