const mongoose = require('mongoose')

const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    require: true,
  },
  whatsapp: {
    type: String,
    require: true,
  },
  bio: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  cost: {
    type: Number,
    require: true,
  },
  schedule: {
    type: Array,
    require: true,
    week_day: {
      type: String,
      require: true
    },
    from: {
      type: String,
      require: true
    },
    to: {
      type: String,
      require: true
    }
  },
})

const Classes = mongoose.model('Classes', ClassSchema)
module.exports = Classes