const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/", require("./routes/routes"));
const path = require('path');

if (process.env.NODE_ENV === "production") {
  console.log("In production stage");
  app.use(express.static(path.resolve(__dirname,"../", "client", "build")))
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../", "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`connection is successful at ${port}`);
});
