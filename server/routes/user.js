const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET all users [TODO: filter]
router
  .route('/')
  .get((req, res) => {
    User.where(req.query)
      .fetchAll()
      .then((users) => {
        res.status(200).json(users);
      });
  })

  // POST new user
  .post((req, res) => { // OK tested
    new User({
      screenName: req.body.screenName,
      about: req.body.about,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      postalCode: req.body.postalCode,
      skills: req.body.skills,
      lookingFor: req.body.lookingFor,
    })
    .save()
    .then((newUser) => {
      res.status(201).json({ newUser });
    });
  });

// GET user by id
router
  .route('/:id')
  .get((req, res) => { // OK tested
    User.where(req.params)
    .fetch()
    .then((user) => {
      res.status(200).json(user);
      console.log("User was found");
    });
  })

  // PUT update user by user.id
  .put((req, res) => { // OK tested
    User.where('id', req.params.id)
      .fetch()
      .then((user) => {
        user
          .save({
            screenName: req.body.screenName ? req.body.screenName : user.screenName,
            about: req.body.about ? req.body.about : user.about,
            firstName: req.body.firstName ? req.body.firstName : user.firstName,
            lastName: req.body.lastName ? req.body.lastName : user.lastName,
            postalCode: req.body.postalCode ? req.body.postalCode : user.postalCode,
            skills: req.body.skills
              ? req.body.skills
              : user.skills,
            lookingFor: req.body.lookingFor
              ? req.body.lookingFor
              : user.lookingFor
          })
          .then((updatedUser) => {
            res.status(200).json({ updatedUser });
          });
      });
  })
  
  // DELETE user by user.id
  .delete((req, res) => { // OK tested
    User.where('id', req.params.id)
      .destroy()
      .then(() => {
        res
          .status(200)
          .json({ message: 'User has been deleted' });
      })
      .catch(() => {
        res.status(404).json({ error: 'User has not been found. Please provide a valid id' });
      });
  });

  module.exports = router;