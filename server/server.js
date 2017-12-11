const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const pics = require('./routes/pics')
const paths = require('./routes/paths')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/picScrape', pics)
server.use('/api/v1/paths', paths)

module.exports = server
