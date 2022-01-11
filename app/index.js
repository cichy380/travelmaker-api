const {port, database} = require('./config')
const mongoose = require('mongoose')
const app = require('./app')

mongoose.connect(database)
  .then(() => {
    console.log('Connected to the database.')
  })
  .catch((error) => {
    console.log('Cannot connect to the database.')
    console.log(error.toString())
    process.exit()
  })

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`)
})
