const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist2";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
