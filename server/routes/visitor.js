const express = require('express');
const User = require('../models/user');
const router = express.Router();

// get all users
router.route('/').get((req, res) => {
  User.where(req.query)
    .fetchAll({ withRelated: ['messages'] })
    .then((users) => {
      res.status(200).json(users);
    });
});

// post new user
router.route('/').post((req, res) => {
  new User({
    name: req.body.name,
    position: req.body.position,
    manager: req.body.manager,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    categories: JSON.stringify(req.body.categories),
  })
    .save()
    .then((newUser) => {
      res.status(201).json({ newUser });
    })
    .catch((err) => console.error(err));
});

// get user by id
router.route('/:id').get((req, res) => {
  User.where('id', req.params.id)
    .fetch({ withRelated: ['messages'] })
    .then((user) => {
      res.status(200).json(user);
    });
});

// update user
router.route('/:id').put((req, res) => {
  User.where('id', req.params.id)
    .fetch()
    .then((user) => {
      user
        .save({
          name: req.body.name ? req.body.name : user.name,
          position: req.body.position ? req.body.position : user.position,
          manager: req.body.manager ? req.body.manager : user.manager,
          address: req.body.address ? req.body.address : user.address,
          phone: req.body.phone ? req.body.phone : user.phone,
          email: req.body.email ? req.body.email : user.email,
          categories: JSON.stringify(req.body.categories)
            ? JSON.stringify(req.body.categories)
            : user.categories,
        })
        .then((updatedUser) => {
          res.status(200).json({ updatedUser });
        });
    });
});

// delete user
router.route('/:id').delete((req, res) => {
  User.where('id', req.params.id)
    .destroy()
    .then((deletedUser) => {
      res
        .status(200)
        .json({ message: 'user has been deleted', deletedUser });
    });
});

module.exports = router;