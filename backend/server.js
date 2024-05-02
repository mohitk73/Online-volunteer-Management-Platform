const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const blooddonationRoutes = require('./routes/blooddonationRoutes');
const donationRoutes = require('./routes/donationRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/contact.html'));
}); 
app.get('/volunteer', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/becomevolunteer.html'));
});
app.get('/blooddonation', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/blooddonation.html'));
});
app.get('/donation', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/donation.html'));
});

mongoose.connect('mongodb://127.0.0.1:27017/formdata', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

app.use('/api', contactRoutes);
app.use('/api', volunteerRoutes);
app.use('/api', blooddonationRoutes);
app.use('/api', donationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});