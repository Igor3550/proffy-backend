const express = require('express')

const User = require('../models/User')

const router = express.Router()

router.post('/register', async (req, res) => {
  const { email } = req.body

  try {
    if (await User.findOne({ email }))
      return res.status(400).send({ error: 'O usuario ja existe!' })

    const user = await User.create(req.body)

    user.password = undefined

    return res.send({ user })
  } catch (err) {
    return res.status(400).send({ error: 'Registration failed!' })
  }
})

router.get('/search', async (req, res) => {
  const { name } = req.body

  try {
    const user = await User.find({ "name": name })
    if (user.length > 0) {
      return res.send({ user })
    } else {
      return res.send({ User: 'Not Found!' })
    }
  } catch (err) {
    return res.send({ error: 'Erro ao pesquisar usuario!' })
  }

})

module.exports = app => app.use('/auth', router)
