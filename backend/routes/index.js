const router = require('express').Router();
const passport = require('passport');
const genPassword = require('../lib/passwordUtils').genPassword;
const connection = require('../config/database');
const User = require('../models/user.model');

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.send('No User Exists');
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send('success');
      });
    }
  })(req, res, next);
});

const isAdministratorMiddleware = (req, res, next) => {
  const { user } = req;

  if (user) {
    if (user.isAdmin) {
      next();
    } else {
      res.send('Not an admin');
    }
  } else {
    res.send('you need to logged in');
  }
};

router.post('/register', (req, res, next) => {
  const saltHash = genPassword(req.body.password);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = new User({
    username: req.body.username,
    isAdmin: true,
    hash: hash,
    salt: salt,
  });

  newUser.save().then((user) => {
    console.log(user);
  });
});

router.get('/user', (req, res) => {
  res.send(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.send('success');
});

router.post('/deleteuser', isAdministratorMiddleware, async (req, res) => {
  const { id } = req.body;
  await User.findByIdAndDelete(id);
  res.send('success');
});

router.get('/getallusers', isAdministratorMiddleware, async (req, res) => {
  const users = await User.find({});
  res.send(users);
});
module.exports = router;
