const express = require("express");
const serverless = require("serverless-http");

// Create an instance of the Express app
const app = express();

// Create a router to handle routes
const router = express.Router();

// Define a route that responds with a JSON object when a GET request is made to the root path
router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});
router.get("/getusers", (req, res) => {
  res.json({
    message: "users",
  });
});

// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/api`, router);

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);

// localhost:9000/.netlify/functions/api will return what you have configured / endpoint
// localhost:9000/.netlify/functions/api/another: will return what you have configured /another endpoint
