const { Transactions } = require("../models/transactionModel");

const getTransaction = async (req, res) => {
  try {
    // console.log(req.userId);
    const data = await Transactions.find({ userid: req.userId });

    res.json(data);
  } catch (error) {
    res.send(error);
  }
};
const postTransaction = async (req, res) => {
  try {
    const { type, amount,about } = req.body;
    const data = new Transactions({
      userid: req.userId,
      type, 
      amount,
      about,
     
    });
    // const savenote = await newNote.save();

    // const data = await new Transactions (req.body);
    const saveddata = await data.save();
    return res.status(201).send(saveddata);
    // res.json(saveddata);
  } catch (error) {
    res.send(error);
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const deletedata = await Transactions.findById(req.params.id);
    // console.log(deletedata);

    if (!deletedata) {
      return res.send("Not Found");
    }

    const deldata = await Transactions.findByIdAndDelete(req.params.id);
    res.send("Success");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTransaction,
  postTransaction,
  deleteTransaction,
};
