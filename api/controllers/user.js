const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

Date.prototype.addHours = function (h) {
  this.setHours(this.getHours() + h);
  return this;
}

exports.signup = async (req, res, next) => {
  const userExist = await User.find({
    email: req.body.email
  })
  try {
    if (userExist.length > 0) {
      return res.status(422).json({
        message: "User allready exist",
      });
    } else {
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err,
          })
        } else {
          try {
            const user = new User({
              email: req.body.email,
              password: hash,
            });
            const response = await user.save();
            const data = {
              message: 'User created',
              data: {
                user: {
                  email: response.email,
                },
              },
            };
            res.status(201).json(data);
          } catch (err) {
            res.status(500).json({
              error: err,
            });
          };
        };
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  };
};

exports.login = async (req, res, next) => {
  const user = await User.find({
    email: req.body.email
  }).exec();
  try {
    if (user.length < 1) {
      return res.status(401).json({
        message: `Auth failed`,
      });
    }
    bcrypt.compare(req.body.password, user[0].password, (err, result) => {

      if (err) {
        return res.status(401).json({
          message: `Auth failed`,
        });
      }
      if (result) {
        const nbHour = 24;
        // const expiresIn = new Date().addHours(nbHour);
        const token = jwt.sign({
            email: user[0].email,
            userId: user[0]._id
          },
          process.env.JWT_KEY, {
            expiresIn: `${nbHour}h`
          },
        );
        return res.status(200).json({
          message: "Auth sucessfull",
          email: user[0].email,
          token: token,
          expiresIn: nbHour * 3600 * 1000,
        });
      } else {
        return res.status(401).json({
          message: `Auth failed`,
        });
      }
    });
  } catch (err) {
    res.status(404).json({
      error: err,
    });
  };
};

exports.get_all_users = async (req, res, next) => {
  try {
    const response = await User.find().select('email _id').exec();
    const data = {
      count: response.length,
      data: {
        users: response.map(doc => {
          return {
            email: doc.email,
            _id: doc._id
          };
        })
      },
    };
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  };
};

exports.get_a_user = async (req, res, next) => {
  const id = req.params.userId;
  try {
    const response = await User.findById(id).select('email _id').exec();
    const data = {
      data: {
        user: {
          email: response.email,
          _id: response._id,
        }
      }
    }
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  };
};

exports.delete_a_user = async (req, res, next) => {
  const id = req.params.userId;
  try {
    const response = await User.remove({
      _id: id
    }).exec()
    if (response.n > 0) {
      res.status(200).json({
        message: 'User removed',
        _id: id,
      });
    } else {
      res.status(404).json({
        message: `User ${id} doesn't exist`,
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  };
};