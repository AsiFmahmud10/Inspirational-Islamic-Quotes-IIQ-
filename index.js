const path = require('path')
const express = require('express')
const app = express()

const helmet = require('helmet')
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded())

// router
const dataRouter = require('./route/dataRouter.js')
const searchRouter = require('./route/searchRouter.js')

app.use('/data',dataRouter)
app.use('/search', searchRouter)

app.listen(3000)
console.log("I am connected on Port 3000")
