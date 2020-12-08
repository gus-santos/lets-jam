const express = require('express');
const router = express.Router();
const Post = require('../models/posts');
const User = require('../models/user');

// Get all posts
router.route('/:id').get((req, res) => {
  Post.where(req.query)
    .fetchAll({ withRelated: ['post'] })
    .then((posts) => {
      res.status(200).json({ posts });
    });
});

// Add new post
router.route('/:id').post((req, res) => {
  User.where('id', req.body.sender)
    .fetch()
    .then((user) => console.log('User found'))
    .catch((user) => {
      res.status(404).json({ error: 'User not found' });
    });
    
  new Post({
    author: req.body.author,
    content: req.body.content
  })
    .save()
    .then((newPost) => {
      res.status(201).json({ newPost });
    })
    .catch((err) => console.error(err));
});

// Get post by id
router.route('/:userId/:id').get((req, res) => {
  Post.where('id', req.params.id)
    .fetch({ withRelated: ['posts'] })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => console.error(err));
});

// Update post
router.route('/:userId/:id').put((req, res) => {
  Post.where('id', req.params.id)
    .fetch()
    .then((post) => {
      post
        .save({
          author: req.body.author ? req.body.author : post.author,
          content: req.body.content ? req.body.content : post.content
        })
        .then((updatedPost) => {
          res.status(200).json({ updatedPost });
        });
    });
});

// Delete post
router.route('/:userId/:id').delete((req, res) => {
  Post.where('id', req.params.id)
    .destroy()
    .then((deletedPost) => {
      res
        .status(200)
        .json({ message: 'Post has been deleted', deletedPost });
    });
});

module.exports = router;