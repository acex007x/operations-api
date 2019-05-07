const express = require('express')
require('./db/mongoose')

const userRouter = require('./routes/userRoutes')
const operationRouter = require('./routes/operationsRoutes')

const app = express()
const port = process.env.PORT || 3002

app.use(express.json())
app.use(userRouter)
app.use(operationRouter)

app.listen(port, () => {
    console.log('server is connected' + port)
})