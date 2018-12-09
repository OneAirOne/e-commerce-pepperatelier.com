const multer = require('multer');

const { ROOT_STORAGE, IMAGE_FOLDER } = require('../bootstrap/env');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${ROOT_STORAGE}${IMAGE_FOLDER}`);
  },
  filename: function (req, file, cb) {
    cb(null, `${new Date().toISOString()}_${file.originalname}`)
  },
});

const fileFilter = (req, file, cb) => {
  // reject file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Only jpeg and png files are allowed'), false);
  }
};
// => provide an error message for size error when uploading
exports.upload = multer({
  storage: storage,
  limits: {
    // fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});