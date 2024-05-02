const mongoose = require('mongoose');
const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  city: { type: String, required: true },
  // Add more fields as needed
});

module.exports = mongoose.model('Volunteer', volunteerSchema);