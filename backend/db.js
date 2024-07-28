// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

if (!MONGO_URL || !DB_NAME) {
  console.error('Environment variables MONGO_URL and DB_NAME must be set');
  process.exit(1); // Exit the process with a failure code
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      dbName: DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to database');
  } catch (err) {
    console.error('Error connecting to database:', err);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectDB;