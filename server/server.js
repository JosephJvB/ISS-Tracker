const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const pics = require('./routes/pics')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1', pics)

module.exports = server
