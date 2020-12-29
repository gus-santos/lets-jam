const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

// GET all posts
router.get('/', postController.get);

// POST new post
router.post('/', postController.post);

// GET post by ID
router.get('/:id', postController.getById);

// PUT update post by post.id
router.put('/:id', postController.update);

// DELETE post by post.id
router.delete('/:id', postController.del);

module.exports = router;