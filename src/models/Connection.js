const mongoose = require('../database')

const ConnectionSchema = new mongoose.Schema({
  user_id: {
    type: String,
    require: true,
  },
})

const Connection = mongoose.model('Connection', ConnectionSchema)
module.exports = Connection