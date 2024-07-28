// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const User = require('./models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Trade = require('./models/tradeDT');
const connectDB = require('./db');

dotenv.config();
connectDB();

const app = express();

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

app.get('/tradedata', async (req, res) => {
  try {
    const trades = await Trade.find();
    res.status(200).json(trades);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch trade data', error: err.message });
  }
});

app.post('/signup', async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, phone, password } = req.body;

    if (password.length < 6) {
      return res.status(400).json({
        message: 'Password must be at least 6 characters long',
      });
    }

    let newUser = new User({
      name: name,
      email: email,
      phone: phone,
      password: await bcrypt.hash(password, 10),
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
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/tradedata', async (req, res) => {
  const { name, number, email, completionDate, pair, amount, cdname, cdnumber, cddate, cdcvv } = req.body;

  if (amount < 100) {
    return res.status(400).json({ message: 'Amount must be at least Rs.100 up' });
  }

  try {
    const newTrade = new Trade({ name, number, email, completionDate, pair, amount, cdname, cdnumber, cddate, cdcvv });
    await newTrade.save();
    res.status(201).json(newTrade);
  } catch (err) {
    res.status(500).json({ message: 'Failed to register. Please try again.', error: err.message });
  }
});

app.get('/user/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email }).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user data', error: err.message });
  }
});

app.put('/user/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const updateData = req.body;
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }
    const user = await User.findOneAndUpdate({ email }, updateData, { new: true }).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update user data', error: err.message });
  }
});

app.get('/userdashboard', async (req, res) => {
  const { email } = req.query;
  try {
    const user = await User.findOne({ email }).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const trades = await Trade.find({ email });
    res.status(200).json({ user, trades });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user data and trades', error: err.message });
  }
});

app.listen(PORT, () => {
  console.log('Server running at ' + PORT);
});
