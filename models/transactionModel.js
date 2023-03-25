const db = require("../db/db");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const transactions = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  about: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Transactions = new mongoose.model("transactions", transactions);

module.exports = {
  Transactions,
};
