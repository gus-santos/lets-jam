const express = require('express');
const router = express.Router();
const Message = require('../models/messaging');
const User = require('../models/user');

// Get all messages
router.route('/').get((req, res) => {
  Message.where(req.query)
    .fetchAll({ withRelated: ['user'] }) // [Q] Ideally, combine sender and recipient
    .then((messages) => {
      res.status(200).json({ messages });
    });
});

// Post new message
router.route('/').post((req, res) => {
  User.where('id', req.body.sender)
    .fetch()
    .then((user) => console.log('User found'))
    .catch((user) => {
      res.status(404).json({ error: 'User not found' });
    });

  new Message({
    sender: req.body.sender,
    recipient: req.body.recipient,
    content: req.body.content
  })
    .save()
    .then((newMessage) => {
      res.status(201).json({ newMessage });
    })
    .catch((err) => console.error(err));
});

// Delete message
router.route('/:id').delete((req, res) => {
  Message.where('id', req.params.id)
    .destroy()
    .then((deletedMessage) => {
      res.status(200).json({ deletedMessage });
    })
    .catch((err) => console.error(err));
});

module.exports = router;