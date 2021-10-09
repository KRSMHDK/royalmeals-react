const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

const recipeRouter = require('./routes/recipes');

app.use(cors());
app.use(express.json());
app.use('/api/recipes', recipeRouter);

const PORT = process.env.PORT;

const URI = process.env.MONGODB_URI;

console.log('connecting to', URI);

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB', error.message);
  });

app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});
