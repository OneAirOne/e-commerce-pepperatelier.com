const express = require('express');
const router = express.Router();

// controllers
const orderController = require('../controllers/order');

router.post('/', orderController.send_order);

module.exports = router;