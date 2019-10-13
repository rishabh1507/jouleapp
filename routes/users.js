var express = require('express');
var router = express.Router();
var User = require('../models/user');
var PostModel = require('../models/postmodel');
var passport = require('passport');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/register', function (req, res, next) {
  addToDB(req, res);
});

async function addToDBP(req, res) {
  var user = new PostModel({
    loginId: req.body.loginId,
    title: req.body.title,
    body1: req.body.body1,
    category: req.body.category,
    creation_dt: Date.now()
  });
  try {
    doc = await user.save();
    return res.status(201).json(doc);
  }
  catch (err) {
    return res.status(501).json(err);
  }
}

router.post('/makepost', function (req, res, next) {
  addToDBP(req, res);
});

async function addToDB(req, res) {
  var user = new User({
    email: req.body.email,
    username: req.body.username,
    password: User.hashPassword(req.body.password),
    creation_dt: Date.now(),
    owner:req.body.owner
  });
  try {
    doc = await user.save();
     res.status(201).json(doc);
    res.status(201).json(doc);

  }
  catch (err) {
    return res.status(501).json(err);
  }
}

router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) { return res.status(501).json(err); }
    if (!user) { return res.status(501).json(info); }
    req.logIn(user, function (err) {
      if (err) { res.status(501).json(err); }
      return res.status(200).json({ user })
      // .json({ message: 'Login Success' });
    });
  })(req, res, next);
});

//get  the current user
router.get('/user', isValidUser, function (req, res, next) {
  return res.status(200).json(req.user);
});

// get the post
router.get('/allpost', function (req, res, next) {
  PostModel.find({}, (err, data) => {
    res.json({ data });
  });
});


//getpostby id
router.get('/getpost/:loginId', function (req, res, next) {
  PostModel.find({ loginId: req.params.loginId }, (err, data) => {
    res.json({ data });
  });
});

//delete post
router.delete('/deletepost/:id', (req, res) => {
  PostModel.findByIdAndDelete({ _id: req.params.id },
    (err, data) => {
      res.json({ data });
    });
});

//guest component
router.get('/guest', function (req, res, next) {
  PostModel.find({}, (err, data) => {
    res.json({ data });
  });
});

// update user
router.put('/updatepost', (req, res) => {
  PostModel.findById(req.body._id, (err, data) => {
    data.title = req.body.title;
    data.body1 = req.body.body1;
    data.save();
    res.status(201).send(data);
  });
});



// router.get('/')

// router.get('/getpost', function (req, res, next) {
//   PostModel.findOne({}, (err, data) => {
//     res.json({ data });
//   });
// });

router.get('/logout', isValidUser, function (req, res, next) {
  req.logout();
  return res.status(200).json({ message: 'Logout Success' });
})

function isValidUser(req, res, next) {
  if (req.isAuthenticated()) next();
  else return res.status(401).json({ message: 'Invalid Request' });
}

module.exports = router;
