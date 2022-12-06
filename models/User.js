const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  }
  

}, { collection: 'User'})

module.exports = mongoose.model('HouseData.User', userSchema)