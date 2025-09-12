const express = require("express");
const app = express();
const port = 4000;

app.get("/data", (req, res) => {
  res.send("Hello TALLURI 🚀");
});

app.listen(port, () => {
  console.log(`App server running on port ${port}`);
});