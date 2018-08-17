const mongoose = require('./connection')
const seeds   = require('../../data/data')

const Ad = mongoose.model('Ad')

mongoose.Promise = Promise

Ad.remove({}).then(_ => {
  console.log('Dropped the DB')
  Ad.collection.insert(seeds).then(seededEntries => {
    console.log(seededEntries)
    mongoose.connection.close()
  })
})
