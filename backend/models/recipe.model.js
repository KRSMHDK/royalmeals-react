const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  recipeTitle: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  ingredients: {
    type: Array,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  instructions: {
    type: String,
    required: true,
    trim: true,
  },
  method: {
    type: String,
    required: true,
    trim: true,
  },
  cut: {
    type: String,
    required: true,
    trim: true,
  },
  course: { type: String, required: true, trim: true },
  cuisine: { type: String, required: true, trim: true },
  flavor: { type: String, required: true, trim: true },
  cooktime: { type: Number },
  favorites: { type: Number },
  difficulty: { type: String, required: true, trim: true },
  image: {
    type: String,
  },
  author: { type: String },
});

recipeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Recipe', recipeSchema);
