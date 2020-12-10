const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const User = require('../models/user');

// GET all posts [TODO: get all posts except from loggedUser]
router
  .route('/')
  .get((req, res) => { // OK tested
    Post.where(req.query)
      .fetchAll({ withRelated: ['user'] })
      .then((posts) => {
        res.status(200).json(posts);
      });
  })

  // POST new post
  .post((req, res) => { // OK tested
    User.where('id', req.body.author)
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

  // GET post by ID
  router
    .route('/:id')
    .get((req, res) => { // OK tested
      Post.where(req.params)
        .fetch({ withRelated: ['user'] })
        .then((post) => {
          res.status(200).json(post);
        })
        .catch((err) => console.error(err));
    })

    // PUT update post by post.id
    .put((req, res) => { // OK tested
      if (req.body.author) {
        User.where('id', req.body.author)
          .fetch()
          .then(() => console.log('User found'))
          .catch(() => {
            res.status(404).json({ error: 'User has not been found. Please provide a valid id'});
          });
      }

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
  })

  // DELETE post by post.id
  .delete((req, res) => { // OK tested
    Post.where('id', req.params.id)
      .destroy()
      .then(() => {
        res
          .status(200)
          .json({ success: `Post has been deleted` });
      })
      .catch(() => {
        res.status(404).json({ error: 'Post has not been found. Please provide a valid id' });
      });
  });

module.exports = router;