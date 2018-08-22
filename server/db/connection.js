const mongoose = require('./models/ad')

mongoose.Promise = Promise

const mongoUri = 'mongodb://localhost:27017/nanos'
if (process.env.NODE_ENV == "production") {
  mongoose
    .connect(process.env.MLAB_URL)
    .then(connection => console.log(`Connection established to production db '${connection.db.databaseName}'`))
    .catch(connectionError => console.log('Connection to prod db failed!', connectionError))
} else {
  mongoose
    .connect(mongoUri, { useNewUrlParser: true })
    .then(connection => console.log(`Connection established to dev db '${connection.db.databaseName}'`))
    .catch(connectionError => console.log('Connection to dev db failed!', connectionError))
}
module.exports = mongoose