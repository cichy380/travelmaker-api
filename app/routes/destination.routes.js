const express = require('express')
const router = new express.Router()
const destinations = require('../controllers/destination.controller')

router.get('/destinations', destinations.readAll)
router.get('/destinations/:id', destinations.readOne)
router.post('/destinations', destinations.create)
router.put('/destinations/:id', destinations.update)
router.delete('/destinations/:id', destinations.delete)
router.get('*', (req, res) => res.status(400).json({message: 'Endpoint does not exist.'}))

module.exports = router
