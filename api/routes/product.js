const express = require('express');
const router = express.Router();

// middleware
const fileUpload = require('../middleware/file-upload');
const checkAuth = require('../middleware/check-auth');

// controllers
const productController = require('../controllers/product');

const uploads = fileUpload.upload.fields([{
  name: 'images',
  maxCount: 5,
}, {
  name: 'thumbnail',
  maxCount: 1,
}]);

router.get('/', productController.get_all_products);

router.post('/', checkAuth, uploads, productController.add_a_product);

router.get('/:productId', productController.get_a_product);

router.put('/:productId', checkAuth, uploads, productController.update_a_product);

router.delete('/:productId', checkAuth, productController.delete_a_product);

module.exports = router;