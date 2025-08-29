const functions = require("firebase-functions");
const express = require("express");
const app = express();

// Example route
app.get("/hello", (req, res) => {
  res.send("Hello from Cloud Functions!");
});

// Export function
exports.myFunction = functions.https.onRequest(app);
