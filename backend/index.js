const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const User = require('./models/userSchema');
const app = express();

dotenv.config();
require('./db');

const PORT = process.env.PORT || 5000;
const alloverOrigin = [process.env.FRONTEND_URL];

app.use(bodyParser.json());

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || alloverOrigin.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.json({ message: 'Okey' });
});

app.post('/signup', async (req, res) => {
    try {
      console.log(req.body);
      const { email, password } = req.body;
  
      if (password.length < 6) {
        return res.status(400).json({
          message: 'Password must be at least 6 characters long',
        });
      }
  
      let newUser = new User({
        email: email,
        password: password,
      });
  
      await newUser.save();
  
      res.status(200).json({
        message: 'User registered successfully',
      });
    } catch (e) {
      console.error(e);
      let errorMessage = 'Error registering user';
  
      if (e.code === 11000) {
        // Duplicate key error (unique constraint violation)
        errorMessage = 'Email already exists';
      } else if (e.errors && e.errors.password && e.errors.password.kind === 'minlength') {
        errorMessage = e.errors.password.message;
      }
  
      res.status(400).json({
        message: errorMessage,
      });
    }
  });  

app.listen(PORT, () => {
  console.log('Server running at ' + PORT);
});
