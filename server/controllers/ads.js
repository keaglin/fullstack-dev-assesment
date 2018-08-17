const express = require('express')
const router = express.Router()
const mongoose = require('../db/connection')
const Ad = mongoose.model('Ad')

router.get('/', (req, res) => {
  Ad.find({})
    .then(ads => {
      res.json({ads: ads})
    })
    .catch(err => console.log('Something went wrong', err))
})

module.exports = router
