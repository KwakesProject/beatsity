var mongoose = require('mongoose');
var User = require('./user');

var songSchema = new mongoose.Schema({
  artist: { type: mongoose.Schema.ObjectId, ref: 'User' },
  title: String,
  image: String,
  genre: String,
  bpm: String,
  url: String
});

module.exports = mongoose.model('Song', songSchema);