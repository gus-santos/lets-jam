const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Update user
router.route('/:id').put((req, res) => {
    User.where('id', req.params.id)
      .fetch()
      .then((user) => {
        user
          .save({
            contactInfo: JSON.stringify(req.body.contactInfo)
              ? JSON.stringify(req.body.contactInfo)
              : user.contactInfo,
            screenName: req.body.screenName ? req.body.screenName : user.screenName,
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
  });
  
  // Delete user
  router.route('/:id').delete((req, res) => {
    User.where('id', req.params.id)
      .destroy()
      .then((deletedUser) => {
        res
          .status(200)
          .json({ message: 'User has been deleted', deletedUser });
      });
  });