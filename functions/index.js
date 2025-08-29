const functions = require("firebase-functions");
const express = require("express");
const app = express();

// Example API endpoint
app.get("/hello", (req, res) => {
  res.send("Hello from Firebase Functions!");
});

// Export the function
exports.myFunction = functions.https.onRequest(app);
