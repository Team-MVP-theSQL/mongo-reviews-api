const mongoose = require('mongoose');
const db = require('./index');

const reviewsSchema = new mongoose.Schema({
  shoeid: Number,
  nickname: String,
  location: String,
  title: String,
  body: String,
  photos: [{type: String}],
  pros: [{type: String}],
  cons: [{type: String}],
  recommended: Boolean,
  overallrating: Number,
  qualityrating: Number,
  valuerating: Number,
  timecreated: String,
});

const Review = mongoose.model('Review', reviewsSchema);

module.exports = Review;