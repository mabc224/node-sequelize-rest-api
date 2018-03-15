const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');

const appConfig = require('./../config/appConfig');
const { User } = require('../models');


module.exports = {
  handleSignUp: (req, res) => {
    const username = req.body.username.trim();
    const secret = req.body.secret.trim();

    console.log(req.body);
    // Check if username already exists
    User.findAll({
      where: { username },
    })
      .then((user) => {
        if (user.length > 0) {
          return res
            .status(400)
            .send({ error: true, message: 'The username is already registered.' });
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(secret, salt);

        const newUser = {
          username,
          secret: hash,
        };

        return User.create(newUser)
          .then(() => res.status(201).json({ error: false, data: 'OK' }))
          .catch(err => res.status(500).send({ error: err.message }));
      })
      .catch(err => res.status(500).json({ error: true, message: err.message }));
  },
  handleSignIn: (req, res) => {
    const { username } = req.body;
    const { secret } = req.body;

    User.findAll({
      where: {
        username,
      },
    })
      .then((user) => {
        if (user.length === 0) {
          return res.status(401).json({
            error: true,
            message: 'No user with the given username',
          });
        }
        // checking the secret
        if (!bcrypt.compareSync(secret, user[0].secret)) {
          return res.status(401).send({ error: true, message: 'Incorrect credentials' });
        }
        const payload = {
          username: user[0].username,
        };
        const accessToken = jsonWebToken.sign(payload, appConfig.jwtSecret, {
          algorithm: 'HS256',
          expiresIn: '1d', // we are setting the expiration time of 1 day.
        });

        return res.status(200).json({ error: false, data: { token: accessToken } });
      })
      .catch(err => res.status(500).json({ error: true, message: err.message }));
  },

};

exports.logOut = function (req, res, next) {

};

