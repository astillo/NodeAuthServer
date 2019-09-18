const express = require('express')
const server = express()
const cors = require('cors')

const authRouter = require('./auth/auth-router.js')
const usersRouter = require('./users/user-router.js')

server.use(express.json())

server.use(helmet())
server.use(cors())

server.use('/auth', authRouter)
server.use('/users', usersRouter)

server.get('/', (req, res) => {
    res.send('Heeeello')
})

module.exports = server