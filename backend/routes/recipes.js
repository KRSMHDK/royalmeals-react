const router = require('express').Router();
const multer = require('multer');
// const { v4: uuidv4 } = require('uuid');
// let path = require('path');
let Recipe = require('../models/recipe.model');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'recipeimages',
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

router.route('/add').post(upload.single('image'), (req, res) => {
  const recipeTitle = req.body.recipeTitle;
  const description = req.body.description;
  const ingredients = req.body.ingredients;
  const difficulty = req.body.difficulty;
  const instructions = req.body.instructions;
  const image = req.file.filename;

  const newRecipeData = {
    recipeTitle,
    description,
    difficulty,
    ingredients,
    instructions,
    image,
  };

  const newRecipe = new Recipe(newRecipeData);

  newRecipe
    .save()
    .then(() => res.json('Recipe Added'))
    .catch((err) => res.status(400).json('Error ' + err));
});

router.route('/').get((req, res) => {
  Recipe.find({}).then((recipes) => {
    res.json(recipes);
  });
});

router.route('/:id').get((req, res, next) => {
  if (req.params.id.length !== 24) {
    res.status(404).end();
  }
  Recipe.findById(req.params.id)
    .then((recipe) => {
      if (recipe) {
        res.json(recipe);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
});

module.exports = router;
