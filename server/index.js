const express = require('express')
const parser = require('body-parser')
const app = express()
const cors = require('cors')
const data = require('../data/data')
const AdsController = require('./controllers/ads')

app.set('port', process.env.PORT || 3001)
app.use(cors())
app.use(parser.urlencoded({extended: true}))
app.use(parser.json({extended: false}))
app.use('/', AdsController)

app.listen(app.get('port'), () => {
  console.log('It\'s aliiive! on PORT', app.get('port'))
})