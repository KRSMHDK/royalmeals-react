const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const app = express();
const passport = require('passport');
const crypto = require('crypto');
const routes = require('./routes');
const recipeRouter = require('./routes/recipes');
const MongoStore = require('connect-mongo');

require('dotenv').config();

const PORT = process.env.PORT;

const URI = process.env.MONGODB_URI;

const clientP = mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((m) => m.connection.getClient());

app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: 'leo',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      clientPromise: clientP,
      stringify: false,
      autoRemove: 'interval',
      autoRemoveInterval: 1,
      collectionName: 'sessions',
    }),
    cookie: {
      maxAge: 60 * 1000 * 60 * 24,
    },
  })
);

app.use('/api/recipes', recipeRouter);

app.get('/', (req, res) => {
  if (req.session.viewCount) {
    req.session.viewCount = req.session.viewCount + 1;
  } else {
    req.session.viewCount = 1;
  }
  res.send(`<h1> You have visited this page ${req.session.viewCount}`);
});

// PASSPORT AUTHENTICATION
require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

console.log('connecting to', URI);

app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});
