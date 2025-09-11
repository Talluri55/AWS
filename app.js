const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 Hello Manoj Talluri");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
