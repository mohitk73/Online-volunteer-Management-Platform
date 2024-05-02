const mongoose = require('mongoose');

const blooddonationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true }, 
  age: { type: Number, required: true },
  city: { type: String, required: true },
  bloodGroup: { type: String, required: true }
});

module.exports = mongoose.model('Blooddonation', blooddonationSchema);