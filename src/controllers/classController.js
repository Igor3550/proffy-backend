const express = require('express')
const router = express.Router()

const Class = require('../models/Classes')

const convertTime = (time) => {
  var t = time
  t = t.replace(':', '')
  return parseInt(t)
}

router.post('/create', async (req, res) => {
  try {
    const clas = await Class.create(req.body)
    return res.send({ clas })
  } catch (err) {
    return res.status(400).send({ Error: "erro ao criar nova class!" })
  }
})

router.post('/search', async (req, res) => {
  const { week_day, subject, time } = req.body
  const schedules = await Class.find()
  //await Class.findOneAndRemove({ "__v":0 })
  //const resp = schedules
  
  const tim = convertTime(time)
  const resp = []
  
  schedules.map((clas) => {
    const { schedule } = clas
    schedule.map((item) => {
      var from = convertTime(item["from"])
      var to = convertTime(item["to"])
      if ((item["week_day"] == week_day) && (subject === clas["subject"]) && ((from <= tim) && (to > tim))) {
        const { subject, cost, name, avatar, whatsapp, bio, _id: id } = clas
        const re = {
          subject,
          cost,
          name,
          avatar,
          whatsapp,
          bio,
          id
        }
        resp.push(re)
      }
    })
  })
  return res.send(resp)
})

module.exports = app => app.use('/classes', router)