require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./controllers/totalConnection')(app)
require('./controllers/classController')(app)

app.get('/', (req, res) => {
  return res.send('Salve')
})

app.listen(process.env.PORT || 3000)
