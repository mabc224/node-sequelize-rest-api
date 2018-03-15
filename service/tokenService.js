const jsonWebToken = require('jsonwebtoken');

const appConfig = require('./../config/appConfig');

exports.isBearerAuthenticated = function isBearerAuthenticated(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    jsonWebToken.verify(token, appConfig.jwtSecret, (err, decoded) => {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      }
      req.decoded = decoded;
      return next();
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.',
    });
  }
};
