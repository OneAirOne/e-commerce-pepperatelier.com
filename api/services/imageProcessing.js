const fs = require('fs');
const uuidv4 = require('uuid/v4');
const gm = require('gm').subClass({ imageMagick: true });

const {
  SERVEUR_URL,
  IMAGE_FOLDER,
  THUMB_FOLDER,
  ROOT_STORAGE,
} = require('../bootstrap/env');

function deleteFile(path) {
  fs.unlink(path, (err) => {
    if (err) {
       console.log('error deleteFile: ', err);
      throw err;
    }
  });
}

function getImageSize(image) {
  return new Promise( function(resolve, reject) {
    let size = null;
    try {
      gm(image.path)
        .size(function (err, size) {
          if (err) {
            console.log('error get image size: ', err)
          } else {
            size = { w: size.width, h: size.height }
            resolve(size);
          }
        })
    } catch (err) {
      console.log('error getImageSize: ', err);
      reject(err);
    }
  })
}

function resizeImage(image) {
  return new Promise ( function(resolve, reject) {
    const width = 960;
    const thumb = `${new Date().toISOString()}_${image.originalname}`
    let imageInfo = null;
    try {
      gm(image.path)
        .resize(width)
        .noProfile()
        .write(`${ROOT_STORAGE}${IMAGE_FOLDER}/${THUMB_FOLDER}/${thumb}`, function (err) {
          if (err) {
            console.log('error resizeImage: ', err);
          } else {
            imageInfo = {
              thumbnail: `${SERVEUR_URL}/${IMAGE_FOLDER}/${THUMB_FOLDER}/${thumb}`,
              storage: `${ROOT_STORAGE}${IMAGE_FOLDER}/${THUMB_FOLDER}/${thumb}`,
            }
            resolve(imageInfo);
          }
        })
    } catch (err) {
      console.log('error resizeImage: ', err);
      reject(err);
    }
  })
}

async function deleteImages(imageToDelete, imageArray) {
  return new Promise ( function(resolve, reject) {
    try {
      if (typeof imageToDelete === 'string') {
        const deletedFile = imageArray.filter((img) => img.id == imageToDelete);
        imageArray = imageArray.filter((img) => img.id !== imageToDelete);
        deleteFile(`${deletedFile[0].file.imageStorage}`);
        deleteFile(`${deletedFile[0].file.thumbnailStorage}`);
      } else if (imageToDelete) {
        for (const image of imageToDelete) {
          const deletedFile = imageArray.filter((img) => img.id == image);
          imageArray = imageArray.filter((img) => img.id !== image);
          deleteFile(`${deletedFile[0].file.imageStorage}`);
          deleteFile(`${deletedFile[0].file.thumbnailStorage}`);
        }
      }
      resolve(imageArray);
    } catch (err) {
      console.log('error deleteImages: ', err);
      reject(err);
    }
  })
}

async function processImages(imageArray) {
  const images = [];
  for (const image of imageArray) {
    const size = await getImageSize(image);
    image.w = size.w;
    image.h = size.h;
    const resize = await resizeImage(image);
    image.thumbnail = resize.thumbnail;
    image.thumbnailStorage = resize.storage;
    image.imageStorage = `${ROOT_STORAGE}${IMAGE_FOLDER}/${image.filename}`;
    image.src = `${SERVEUR_URL}/${IMAGE_FOLDER}/${image.filename}`;
    images.push({
      id: uuidv4(),
      file: image
    });
  }
  return images;
}

async function processImagesUpdate(imageArray, actualImageArray) {
  for (const image of imageArray) {
    const size = await getImageSize(image);
    image.w = size.w;
    image.h = size.h;
    const resize = await resizeImage(image);
    image.thumbnail = resize.thumbnail;
    image.thumbnailStorage = resize.storage;
    image.imageStorage = `${image.path}`;
    image.src = `${SERVEUR_URL}/${IMAGE_FOLDER}/${image.filename}`;
    actualImageArray.push({
      id: uuidv4(),
      file: image
    });
  }
  return actualImageArray;
}

module.exports = {
  processImages,
  processImagesUpdate,
  deleteImages,
  deleteFile,
}