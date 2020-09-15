const express = require('express')
const routes = express.Router()

const Connection = require('./models/Connection')
const Class = require('./models/Classes')

const convertTime = (time) => {
  var t = time
  t = t.replace(':', '')
  return parseInt(t)
}

routes.get('/connections/list', async (req, res) => {
  const connections = await Connection.find({})
  const total = connections.length

  return res.send({ total })
})

routes.post('/connections/index', async (req, res) => {
  try {
    const connection = await Connection.create(req.body)
    return res.send({ connection })
  } catch (err) {
    return res.status(400).send({ Error: "Erro ao criar conexão!" })
  }
})

routes.post('/classes/create', async (req, res) => {
  try {
    const clas = await Class.create(req.body)
    return res.send({ clas })
  } catch (err) {
    return res.status(400).send({ Error: "erro ao criar nova class!" })
  }
})

routes.post('/classes/search', async (req, res) => {
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

module.exports = routes