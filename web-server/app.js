const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;
const appServerUrl = process.env.APP_SERVER_URL || "http://app-service:4000";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${appServerUrl}/data`);
    res.send(`<h1>Web Server</h1><p>App Server says: ${response.data}</p>`);
  } catch (error) {
    res.status(500).send("Error calling app server: " + error.message);
  }
});

app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});