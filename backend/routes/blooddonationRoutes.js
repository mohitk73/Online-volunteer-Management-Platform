const express = require('express');
const router = express.Router();
const Blooddonation = require('../models/Blooddonation');

router.post('/blooddonation', async (req, res) => {
  try {
    const { name, email, phone, age, city, bloodGroup } = req.body;
    const blooddonation = new Blooddonation({ name, email, phone, age, city, bloodGroup }); 
    await blooddonation.save();
    res.status(201).send('"Thank you for registering to donate blood. Our team will be in touch with you soon!"');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;