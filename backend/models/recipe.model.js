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
  difficulty: { type: String, required: true, trim: true },
  image: {
    type: String,
  },
});

recipeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Recipe', recipeSchema);
