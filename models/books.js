const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  author: [{ type: String, required: true }],
  synopsis: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  dateSaved: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
