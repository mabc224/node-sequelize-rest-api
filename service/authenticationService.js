exports.handleSignUpValidator = function handleSignUpValidator(req, res, next) {
  req.checkBody({
    username: {
      notEmpty: true,
      errorMessage: 'Username should not be empty',
    },
    secret: {
      notEmpty: true,
      isLength: {
        options: [{ min: 4, max: 8 }],
        errorMessage: 'Secret must be between 4 and 8 chars long',
      },
      errorMessage: 'Invalid secret',
    },
  });

  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).json({ error: true, message: util.inspect(errors) });
  }
  return next();
};

exports.handleSignInValidator = function handleSignInValidator(req, res, next) {
  req.checkBody({
    username: {
      notEmpty: true,
      errorMessage: 'Username should not be empty',
    },
    secret: {
      notEmpty: true,
      isNumeric: {
        errorMessage: 'Secret must be numeric digits',
      },
      isLength: {
        options: [{ min: 4, max: 8 }],
        errorMessage: 'Secret must be between 4 and 8 chars long',
      },
      errorMessage: 'Invalid secret',
    },
  });

  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).json({ error: true, message: util.inspect(errors) });
  }
  return next();
};


exports.logOutValidator = function (req, res, next) {
  return next();
};
