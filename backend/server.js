const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

// Routes
app.use('/api/users', require('./routes/userRoutes'));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the support desk API' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
