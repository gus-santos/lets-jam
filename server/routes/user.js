const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// GET all users
router.get('/', userController.get);

// POST new user
router.post('/', userController.post);

// GET user by ID
router.get('/:id', userController.getById);

// PUT update user by user.id
router.put('/:id', userController.update);

// DELETE user by user.id
router.delete('/:id', userController.del);

module.exports = router;