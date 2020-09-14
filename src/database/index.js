const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/proffy', { useMongoClient: true })
mongoose.Promise = global.Promise

module.exports = mongoose