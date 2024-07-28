const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  completionDate: {
    type: Date,
    required: true,
  },
  pair: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  cdname: {
    type: String,
    required: true,
  },
  cdnumber: {
    type: String,
    required: true,
  },
  cddate: {
    type: String,
    required: true,
  },
  cdcvv: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade;
