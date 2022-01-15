const {origin} = require('./config');
const express = require('express')
const handleSyntaxError = require('./services/handle-syntax-error')
const cors = require("cors");

const app = express()

app.use(cors({origin}));

// parse requests of "application/json" content-type
app.use((req, res, next) => handleSyntaxError(express.json(), req, res, next))

app.use('/api', require('./routes/destination.routes'))

module.exports = app
