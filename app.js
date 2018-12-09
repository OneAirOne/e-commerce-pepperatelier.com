const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const { MONGO_URL } = require('./api/bootstrap/env');

const productRoutes = require('./api/routes/product');
const userRoutes = require('./api/routes/user');
const sitemapRoutes = require('./api/routes/sitemap.js');
const orderRoutes = require('./api/routes/order.js');

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true
});
app.use(cors());
app.use('/robots.txt', express.static(path.join(__dirname, 'static/robots.txt')));
app.use(morgan('dev'));
if (process.env.NODE_ENV === "development") {
  app.use('/uploads', express.static('uploads'));
  app.use('/uploads', express.static('thumb_960'));
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.all('/*', function (req, res, next) {
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// Routes
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/order', orderRoutes);
app.use('/', sitemapRoutes);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
      debug: 'API error',
    },
  });
});

module.exports = app;