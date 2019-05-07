const express = require('express')
const mongoose = require('mongoose')
const app = express()



const userRouter = require('./routes/userRoutes')
const operationsRouter = require('./routes/operationsRoutes')




app.use(express.json())
app.use(userRouter)
app.use(operationsRouter)




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