const express = require("express");
const {  loginUser, registerUser, updateDetails } = require("../controller/loginRoute");
const {
  getTransaction,
  postTransaction,
  deleteTransaction,
} = require("../controller/transactionRoute");
const Auth = require("../middleware/Auth");

const router = express();

// router.get("/api/:id", getDetails);

router.post("/api/login", loginUser);

router.post("/api/register", registerUser);

router.put("/api/update", Auth, updateDetails);

router.get("/api/v1/transactions", Auth, getTransaction);

router.post("/api/transactions", Auth, postTransaction);

router.delete("/api/transactions/:id", Auth, deleteTransaction);

module.exports = router;
