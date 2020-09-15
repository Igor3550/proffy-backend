require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(routes)

//require('./controllers/totalConnection')(app)
//require('./controllers/classController')(app)

app.listen(process.env.PORT || 3000)
