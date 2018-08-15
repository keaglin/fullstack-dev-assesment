const express = require('express')
const parser = require('body-parser')
const app = express()
const cors = require('cors')
const data = require('../data/data')

app.set('port', process.env.PORT || 3001)
app.use(cors())
app.use(parser.urlencoded({extended: true}))
app.use(parser.json({extended: false}))

app.get('/', (req, res) => {
  res.json(data)
})

app.listen(app.get('port'), () => {
  console.log('It\'s aliiive! on PORT', app.get('port'))
})