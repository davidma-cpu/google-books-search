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
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist2";
// mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

const CONNECTION_URL = 'mongodb+srv://davidma:davidma123@cluster0.qdcbx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  }))
  .catch((error) => {console.log(error.message)})

mongoose.set('useFindAndModify', false);

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
