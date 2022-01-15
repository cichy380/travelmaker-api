require('dotenv').config()

module.exports = {
  port: process.env.PORT || 3000,
  database: process.env.DATABASE,
  origin: 'https://cichy380.github.io', // only requests from this "origin" will be allowed
}
