const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

router.post('/donation', async (req, res) => {
  try {
    const { name, email, number, city, amount } = req.body;
    const donation = new Donation({ name, email, number, city, amount });
    await donation.save();
    res.status(201).send('now you can pay securly with razorpay!');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;