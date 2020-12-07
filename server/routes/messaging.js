const express = require('express');
const Message = require('../models/messaging');
const User = require('../models/user');
const router = express.Router();

// get all message items
router.route('/').get((req, res) => {
  Message.where(req.query)
    .fetchAll({ withRelated: ['user'] })
    .then((messages) => {
      res.status(200).json({ messages });
    });
});

// post new message item
router.route('/messaging').post((req, res) => {
  User.where('id', req.body.userId)
    .fetch()
    .then((user) => console.log('User found'))
    .catch((user) => {
      res.status(404).json({ error: 'Please provide valid user id' });
    });
  new Message({
    name: req.body.name,
    description: req.body.description,
    user_id: req.body.userId,
    quantity: req.body.quantity,
    status: req.body.status,
  })
    .save()
    .then((newMessage) => {
      res.status(201).json({ newMessage });
    });
});

// get single message item
router.route('/:id').get((req, res) => {
  Message.where(req.params)
    .fetch({ withRelated: ['user'] })
    .then((message) => {
      res.status(200).json({ message });
    });
});

// update message item
router.route('/:id').put((req, res) => {
  if (req.body.userId) {
    User.where('id', req.body.userId)
      .fetch()
      .then((user) => console.log('User found'))
      .catch((user) => {
        res.status(404).json({ error: 'Please provide valid user id' });
      });
  }

  Message.where('id', req.params.id)
    .fetch()
    .then((message) => {
      message
        .save({
          name: req.body.name ? req.body.name : message.name,
          description: req.body.description
            ? req.body.description
            : message.description,
          user_id: req.body.userId
            ? req.body.userId
            : message.user_id,
          quantity: req.body.quantity ? req.body.quantity : message.quantity,
          status: req.body.status ? req.body.status : message.status,
        })
        .then((updatedMessage) => {
          res.status(200).json({ updatedMessage });
        });
    });
});

// delete message item
router.route('/:id').delete((req, res) => {
  Message.where('id', req.params.id)
    .destroy()
    .then((deletedMessage) => {
      res.status(200).json({ deletedMessage });
    });
});

module.exports = router;