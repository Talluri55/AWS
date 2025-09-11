const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Sample API routes
app.get("/", (req, res) => {
  res.send("Hello Talluri, from Application Server 🚀");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.post("/api/data", (req, res) => {
  const { message } = req.body;
  res.json({ reply: `Received: ${message}` });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App Server running on port ${PORT}`);
});
