const mongoose = require('mongoose')

// mongoose
//     .connect(
//         'mongodb+srv://sachinpandey_01:sachinpandey_01@cluster0-8xehm.mongodb.net/operations?retryWrites=true'
//     )
//     .then(() => {
//         app.listen(3002)
//         console.log('connected to mongoDBAtlas and listening to PORT 3002 ')
//     }).catch(err => {
//         console.log('unable to connect to mongodbAtlas', err)
//     })

mongoose.connect('mongodb://127.0.0.1:27017/operations-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})