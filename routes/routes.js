const { utilityProcess } = require("electron");
const express = require("express");
const { Transactions } = require("../models/db");
const router = express();

router.get("/api/transactions", async (req, res) => {
  try {
    const data = await Transactions.find();

    res.json(data);
  } catch (error) {
    res.send(error);
  }
});

router.post("/api/transactions", async (req, res) => {
  try {
    const data = await new Transactions(req.body);
    const saveddata = await data.save();
    res.json(saveddata);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/api/transactions/:id", async (req, res) => {
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
});


module.exports = router;
