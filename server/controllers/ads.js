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

router.get('/:name', (req, res) => {
  let name = req.params.name
  Ad.findOne({ name: name })
    .then(ad => res.json({ ad: ad}))
    .catch(err => console.log('Something went wrong', err))
})

module.exports = router
