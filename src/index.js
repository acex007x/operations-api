const express = require('express')
const mongoose = require('mongoose')
const app = express()
//const { MONGO_USER, MONGO_PASSWORD } = require('./config/config')


const userRouter = require('./routes/userRoutes')
const operationsRouter = require('./routes/operationsRoutes')




app.use(express.json())
app.use('/users', userRouter)
app.use('/operations', operationsRouter)




mongoose
    .connect(
        'mongodb+srv://sachinpandey_01:sachinpandey_01@cluster0-8xehm.mongodb.net/operations?retryWrites=true'
    )
    .then(() => {
        app.listen(3002)
        console.log('connected to mongoDBAtlas and listening to PORT 3002 ')
    }).catch(err => {
        console.log('unable to connect to mongodbAtlas', err)
    })