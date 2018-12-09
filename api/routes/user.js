const express = require('express');
const router = express.Router();

// middleware
const checkAuth = require('../middleware/check-auth');

// controllers
const userController = require('../controllers/user');

// router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.get('/', checkAuth, userController.get_all_users);

router.get('/:userId', checkAuth, userController.get_a_user);

router.delete('/:userId', checkAuth, userController.delete_a_user);

module.exports = router;