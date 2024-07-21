const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const User = require('./models/userSchema');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
      const { name,email,phone,password } = req.body;
  
      if (password.length < 6) {
        return res.status(400).json({
          message: 'Password must be at least 6 characters long',
        });
      }
  
      let newUser = new User({
        name: name,
        email: email,
        phone: phone,
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
        errorMessage = 'Email already exists';
      } else if (e.errors && e.errors.password && e.errors.password.kind === 'minlength') {
        errorMessage = e.errors.password.message;
      }
  
      res.status(400).json({
        message: errorMessage,
      });
    }
  }); 
  
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});


app.listen(PORT, () => {
  console.log('Server running at ' + PORT);
});
