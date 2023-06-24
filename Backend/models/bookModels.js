const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "enter book title"],
    trim: true,
  },
  author: {
    type: String,
    required: [true, "Please enter the book author"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Please enter the price"],
    maxLength: [4, "Year can't exceed 4 characters"],
  },
  image: [String],
  category: {
    type: String,
    required: [true, "Please enter the book category"],
  },
  description: {
    type: String,
    required: [true, "Enter book description"],
  },
  createdAt: { type: Date, default: Date.now },
});


const bookModel = mongoose.model("book", bookSchema);


module.exports = bookModel;
