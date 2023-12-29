require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const connect = require('./DBconnection')
const taskRoute = require ('./Router/taskRoute')
const userRoute = require ('./Router/userRoute')
const PORT = process.env.SERVER_PORT || 4000

app.use(express.json())
app.use(cors())
app.use('/', taskRoute)
app.use('/', userRoute)

app.listen(PORT, () => {
    console.log(`Сервер стартовал на ${PORT} порту`)
})
connect()