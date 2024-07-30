
const mongoose = require('mongoose');

const tradeCloseSchema = new mongoose.Schema({
  coinid: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('TradeClose', tradeCloseSchema);