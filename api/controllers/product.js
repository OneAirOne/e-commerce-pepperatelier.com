const Product = require('../models/product');
const imageProcessing = require('../services/imageProcessing');

const { SERVEUR_URL, ROOT_STORAGE, IMAGE_FOLDER } = require('../bootstrap/env');

exports.add_a_product = async (req, res, next) => {
  let images;
  const imagesUploaded = req.files['images'] ? req.files['images'] : null;
  if (imagesUploaded) {
    if (imagesUploaded.length > 0) {
        images = await imageProcessing.processImages(imagesUploaded);
      }
    }
    console.log('thumb:', req.files['thumbnail']);
    try {
      const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      thumbnail: req.files['thumbnail'] ? req.files['thumbnail'][0] : null,
      images: images,
      stock: req.body.stock,
      weight: req.body.weight,
      widthNose: req.body.widthNose,
      widthPatin: req.body.widthPatin,
      widthTail: req.body.widthTail,
      height: req.body.height,
      stones: req.body.stones,
      plating: req.body.plating,
      boardStyle: req.body.boardStyle,
      category: req.body.category,
      visible: req.body.visible,
      year: req.body.year,
      rayonne: req.body.rayonne,
      flex: req.body.flex,
      updatedAt: new Date(),
    });
    const response = await product.save();
    const data = {
      data: {
        product: {
          _id: response._id,
          name: response.name,
          price: response.price,
          description: response.description,
          thumbnail: response.thumbnail,
          images: response.images,
          stock: response.stock,
          weight: response.weight,
          widthNose: response.widthNose,
          widthPatin: response.widthPatin,
          widthTail: response.widthTail,
          height: response.height,
          stock: response.stock,
          stones: response.stones,
          plating: response.plating,
          boardStyle: response.boardStyle,
          category: response.category,
          visible: response.visible,
          year: response.year,
          rayonne: response.rayonne,
          flex: response.flex,
          links: {
            self: `${SERVEUR_URL}/products/${response._id}`,
          },
        },
      },
    };
    res.status(201).json(data);
  } catch (err) {
    console.log('error: ', err);
    res.status(500).json({
      error: err,
    });
  };
};

exports.update_a_product = async (req, res, next) => {
  const id = req.params.productId;
  const updatedProduct = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
    weight: req.body.weight,
    widthNose: req.body.widthNose,
    widthPatin: req.body.widthPatin,
    widthTail: req.body.widthTail,
    height: req.body.height,
    stones: req.body.stones,
    plating: req.body.plating,
    boardStyle: req.body.boardStyle,
    category: req.body.category,
    visible: req.body.visible,
    year: req.body.year,
    rayonne: req.body.rayonne,
    flex: req.body.flex,
    updatedAt: new Date(),
  }
  // update thumbnails if needed
  const thumbnail = req.files['thumbnail'] ? req.files['thumbnail'] : null;
  if (thumbnail) {
    updatedProduct.thumbnail = thumbnail[0];
  }
  
  try {
    await Product.findById(id, async function (err, product) {
      if (err) console.log('error: ', err);

      let images = product.images;
      const deletedImages = req.body.deletedImages;
      const imagesUploaded = req.files['images'] ? req.files['images'] : null;
      // delete images
      images = await imageProcessing.deleteImages(deletedImages, images);
      // add new images
      if (imagesUploaded) {
        if (imagesUploaded.length > 0) {
          images = await imageProcessing.processImagesUpdate(imagesUploaded, images);
        }
      }
      product.set(updatedProduct);
      product.images = images;
      product.save(function (err, update) {
        if (err) console.log('error: ', err);
        res.status(200).send(update);
      });
    });
  } catch (err) {
    console.log('error: ', err);
    res.status(500).json({
      error: err,
    });
  };
};

exports.get_all_products = async (req, res, next) => {
  try {
    const response = await Product.find().sort([
      ['updatedAt', -1]
    ]).exec();
    const data = {
      count: response.length,
      data: {
        products: response.map(doc => {
          return {
            _id: doc._id,
            name: doc.name,
            description: doc.description,
            price: doc.price,
            thumbnail: doc.thumbnail ?
              {
                originalName: doc.thumbnail.originalname,
                name: doc.thumbnail.filename,
                path: `${SERVEUR_URL}/${IMAGE_FOLDER}/${doc.thumbnail.filename}`,
              }
              : null,
            images: doc.images,
            stock: doc.stock,
            weight: doc.weight,
            widthNose: req.body.widthNose,
            widthPatin: req.body.widthPatin,
            widthTail: req.body.widthTail,
            height: req.body.height,
            stones: doc.stones,
            plating: doc.plating,
            boardStyle: doc.boardStyle,
            category: doc.category,
            visible: doc.visible,
            year: doc.year,
            rayonne: doc.rayonne,
            flex: doc.flex,
            updatedAt: doc.updatedAt,
            links: {
              self: `${SERVEUR_URL}/products/${doc.id}`,
            },
          };
        })
      },
    };
    res.status(200).json(data);
  } catch (err) {
    console.log('error: ', err);
    res.status(500).json({});
  };
};

exports.get_a_product = async (req, res, next) => {
  const id = req.params.productId;
  try {
    const response = await Product.findById(id).exec();
    if (response) {
      const data = {
        data: {
          product: {
            _id: response._id,
            name: response.name,
            description: response.description,
            price: response.price,
            thumbnail: response.thumbnail ?
            {
              originalName: response.thumbnail.originalname,
              name: response.thumbnail.filename,
              path: `${SERVEUR_URL}/${IMAGE_FOLDER}/${response.thumbnail.filename}`,
            }
            : null,
            images: response.images,
            stock: response.stock,
            weight: response.weight,
            widthNose: response.widthNose,
            widthPatin: response.widthPatin,
            widthTail: response.widthTail,
            height: response.height,
            stones: response.stones,
            plating: response.plating,
            boardStyle: response.boardStyle,
            category: response.category,
            visible: response.visible,
            year: response.year,
            rayonne: response.rayonne,
            flex: response.flex,
          },
        },
      };
      res.status(200).json(data);
    } else {
      res.status(404).json({
        message: `No valid entry found for ID : ${id}`,
      });
    };
  } catch (err) {
    console.log('error: ', err);
    res.status(500).json({
      error: err,
    });
  };
};

exports.delete_a_product = async (req, res, next) => {
  const id = req.params.productId;
  const product = await Product.findById(id).select('thumbnail images').exec();

  try {
    const response = await Product.remove({
      _id: id
    }).exec();

    if (response.n > 0) {
      res.status(200).json({
        message: `Product removed`,
        _id: id,
      });
      // remove thumbnail file
      if (product.thumbnail) {
        imageProcessing.deleteFile(`${ROOT_STORAGE}${IMAGE_FOLDER}/${product.thumbnail.filename}`);
      }
      // remove product images
      const images = product.images;
      if (images.length > 0) {
        images.forEach(element => {
          imageProcessing.deleteFile(`${element.file.thumbnailStorage}`);
          imageProcessing.deleteFile(`${element.file.imageStorage}`);
        });
      }
    } else {
      res.status(404).json({
        message: `Product ${id} doesn't exist`,
      });
    };
  } catch (err) {
    console.log('error: ', err);
    res.status(500).json({
      error: err,
    });
  };
};