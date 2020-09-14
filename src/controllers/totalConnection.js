const express = require('express')

const Connection = require('../models/Connection')

const router = express.Router()

router.get('/list', async (req, res) => {
  const connections = await Connection.find({})
  const total = connections.length

  return res.send({ total })
})

router.post('/index', async (req, res) => {
  try {
    const connection = await Connection.create(req.body)
    return res.send({ connection })
  } catch (err) {
    return res.status(400).send({ Error: "Erro ao criar conexão!" })
  }
})

module.exports = app => app.use('/connections', router)