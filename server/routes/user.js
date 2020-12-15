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
      contactInfo: JSON.stringify({
        email: req.body.email,
        phone: req.body.phone,
        soundcloud: req.body.soundcloud,
        bandcamp: req.body.bandcamp,
        facebook: req.body.facebook,
        website: req.body.website}),
      userName: req.body.userName,
      type: req.body.type,
      healthSettings: req.body.healthSettings,
      about: req.body.about,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      postalCode: req.body.postalCode,
      favouriteStudio: req.body.favouriteStudio,
      lookingFor: JSON.stringify(req.body.lookingFor),
      skills: JSON.stringify(req.body.skills),
      instruments: JSON.stringify(req.body.instruments)
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
            contactInfo: JSON.stringify(req.body.contactInfo)
              ? JSON.stringify(req.body.contactInfo)
              : user.contactInfo,
            userName: req.body.userName ? req.body.userName : user.userName,
            type: req.body.type ? req.body.type : user.type,
            healthSettings: req.body.healthSettings
              ? req.body.healthSettings
              : user.healthSettings,
            about: req.body.about ? req.body.about : user.about,
            firstName: req.body.firstName ? req.body.firstName : user.firstName,
            lastName: req.body.lastName ? req.body.lastName : user.lastName,
            postalCode: req.body.postalCode ? req.body.postalCode : user.postalCode,
            favouriteStudio: req.body.favouriteStudio ? req.body.favouriteStudio : user.favouriteStudio,
            lookingFor: JSON.stringify(req.body.lookingFor)
              ? JSON.stringify(req.body.lookingFor)
              : user.lookingFor,
            skills: JSON.stringify(req.body.skills)
              ? JSON.stringify(req.body.skills)
              : user.skills,
            instruments: JSON.stringify(req.body.instruments)
              ? JSON.stringify(req.body.instruments)
              : user.instruments
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