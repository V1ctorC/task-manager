require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('603542019eed7119d9930e5b', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({age : 1})
}).then((result) => {
    console.log(result )
}).catch((err) => {
    console.log(err)
})