const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Use express.json() instead of body-parser for JSON parsing

// MongoDB connection with direct URI
const mongoURI = 'mongodb://localhost:27017/shopper';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Routes
const authRoutes = require('./routes/authRoutes.js');
app.use('/api', authRoutes);

// Server setup
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
