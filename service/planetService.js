const util = require('util');

exports.addPlanetValidator = function addPlanetValidator(req, res, next) {
  req.checkBody({
    name: {
      notEmpty: true,
      errorMessage: 'name should not be empty',
    },
  });

  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).json({ error: true, message: util.inspect(errors) });
  }
  return next();
};

exports.singlePlanetValidator = function singlePlanetValidator(req, res, next) {
  req.checkParams({
    id: {
      notEmpty: true,
      isNumeric: {
        errorMessage: 'Planet id must be numeric digit',
      },
      errorMessage: 'Invalid post id',
    },
  });

  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).json({ error: true, message: util.inspect(errors) });
  }
  return next();
};
