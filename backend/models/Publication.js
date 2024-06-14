const mongoose = require('mongoose');

const PublicationSchema = new mongoose.Schema({
  _id: String,
  type: String,
  title: String,
  pages: {
    start: Number,
    end: Number
  },
  year: Number,
  booktitle: String,
  url: String,
  authors: [String]
});

module.exports = mongoose.model('Publication', PublicationSchema);
