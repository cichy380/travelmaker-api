const mongoose = require('mongoose')

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
  },
})

destinationSchema.method('toJSON', function () {
  const {__v, _id, ...object} = this.toObject()
  object.id = _id
  return object
});

const Destination = mongoose.model('destination', destinationSchema)

module.exports = Destination
