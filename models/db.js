const mongoose = require("mongoose");
const validator = require("validator");
mongoose.set("strictQuery", false);
const dotenv = require('dotenv');
dotenv.config();

// console.log(process.env.DB_CONN);

mongoose
  .connect(process.env.DB_CONN)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Not connected");
  });

const transactions = new mongoose.Schema({
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
