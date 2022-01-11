const Destination = require('../db/models/destination.model')

exports.create = (req, res) => {
  Destination.create(req.body)
    .then(data => res.status(201).json({data}))
    .catch(e => res.status(400).json({details: e.errors || {}, message: e.message || 'Some error occurred while creating the Destination.'}))
}

exports.readAll = (_, res) => {
  Destination.find()
    .then(data => res.status(200).json({data}))
    .catch(e => res.status(400).json({message: e.message || 'Some error occurred while retrieving Destinations.'}))
}

exports.readOne = (req, res) => {
  const {id} = req.params
  Destination.findById(id)
    .then(data => data ? res.status(200).json({data}) : res.status(404).json({message: `Not found Destination with id ${id}.`}))
    .catch(e => res.status(400).json({message: e.reason?.toString() || e.message || `Error retrieving Destination with id ${id}.`}))
}

exports.update = (req, res) => {
  const {id} = req.params
  Destination.findByIdAndUpdate(id, req.body, {returnDocument: 'after'})
    .then(data => data ? res.status(200).json({data}) : res.status(404).json({message: `Not found Destination with id ${id}.`}))
    .catch(e => res.status(400).json({message: e.reason?.toString() || e.message || `Error updating Destination with id ${id}.`}))
}

exports.delete = (req, res) => {
  const {id} = req.params
  Destination.findByIdAndDelete(id, req.body)
    .then(data => data ? res.status(200).json({data}) : res.status(404).json({message: `Not found Destination with id ${id}.`}))
    .catch(e => res.status(400).json({message: e.reason?.toString() || e.message || `Could not delete Destination with id ${id}.`}))
}
