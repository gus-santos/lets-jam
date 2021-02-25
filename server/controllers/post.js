const Post = require('../models/post');
const User = require('../models/user');

// Get all posts
function get(req, res) {
  Post.where(req.query)
  .fetchAll({ withRelated: ['user'] })
  .then((posts) => {
    res.status(200).json(posts);
  });
}

// POST new post
function post(req, res) {
  User.where('id', req.body.author)
  .fetch()
  .then(() => console.log(`User id ${req.body.author} found`))
  .catch(() => {
    res.status(404).json({ error: 'User not found. Please provide valid id' });
  });

  new Post({
    author: req.body.author,
    content: req.body.content
  })

  .save()
  .then((newPost) => {
    res.status(201).json({ newPost });
  });
}

// GET post by ID
function getById(req, res) {
  Post.where(req.params)
  .fetch({ withRelated: ['user'] })
  .then((post) => {
    res.status(200).json(post);
  });
}

// PUT update post by post.id
function update(req, res) {
  if (req.body.author) {
    User.where('id', req.body.author)
    .fetch()
    .then(() => console.log(`User id ${req.body.author} found`))
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
}

// DELETE post by post.id
function del(req, res) {
  Post.where('id', req.params.id)
    .destroy()
    .then(() => {
      res
        .status(200)
        .json({ success: "Post has been deleted" });
    })
    .catch(() => {
      res
        .status(404)
        .json({ error: "Post has not been found. Please provide a valid id" });
    });
}

// export default as object with methods
module.exports = {
  get,
  post,
  getById,
  update,
  del,
};