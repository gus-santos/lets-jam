const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

// GET all posts
router.route('/').get(postController.get);

// POST new post
router.route('/').post(postController.post);

// GET post by ID
router.route('/:id').get(postController.getById);

// PUT update post by post.id
router.route('/:id').put(postController.update);

// DELETE post by post.id
router.route('/:id').delete(postController.del);

module.exports = router;