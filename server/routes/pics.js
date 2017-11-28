const express = require('express')
const bodyParser = require('body-parser')

const puppet = require('./puppet')

const router = express.Router()

router.use(bodyParser.json())

router.get('/picScrape/:city', (req, res) => {
  puppet.scrapePic(req.params.city)
    .then(picSrc => {
      res.send(picSrc)
    })
})

module.exports = router
