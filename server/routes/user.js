const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// GET all users
router.route('/').get(userController.get);

// POST new user
router.route('/').post(userController.post);

// GET user by ID
router.route('/:id').get(userController.getById);

// PUT update user by user.id
router.route('/:id').put(userController.update);

// DELETE user by user.id
router.route('/:id').delete(userController.del);

module.exports = router;