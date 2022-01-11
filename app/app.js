const express = require('express')
const handleSyntaxError = require('./services/handle-syntax-error')

const app = express()

// parse requests of "application/json" content-type
app.use((req, res, next) => handleSyntaxError(express.json(), req, res, next))

app.use('/api', require('./routes/destination.routes'))

module.exports = app
