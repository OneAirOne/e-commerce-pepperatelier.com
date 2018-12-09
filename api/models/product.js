const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  thumbnail: {
    type: Object,
  },
  images: {
    type: Array,
  },
  stock: {
    type: String,
  },
  weight: {
    type: Number,
  },
  stones: {
    type: Array,
  },
  plating: {
    type: Array,
  },
  boardStyle: {
    type: Array,
  },
  widthNose: {
    type: Number,
  },
  widthPatin: {
    type: Number,
  },
  widthTail: {
    type: Number,
  },
  height: {
    type: Number,
  },
  category: {
    type: String,
  },
  rayonne: {
    type: String,
  },
  visible: {
    type: Boolean,
  },
  year: {
    type: String,
  },
  flex: {
    type: Number,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = mongoose.model('Product', productSchema);