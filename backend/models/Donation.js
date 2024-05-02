const mongoose = require('mongoose');
const donationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  city: { type: String, required: true },
  amount: { type: Number, required: true },
  // Add more fields as needed
});

module.exports = mongoose.model('Donation', donationSchema);