const mongoose = require('mongoose')

const AdSchema = new mongoose.Schema({
})

mongoose.model('Ad', AdSchema)

module.exports = mongoose