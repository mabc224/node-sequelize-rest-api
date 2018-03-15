const util = require('util');

exports.addCommentValidator = function addCommentValidator(req, res, next) {
  req.checkBody({
    id: {
      notEmpty: true,
      errorMessage: 'id should not be empty',
    },
    comment: {
      notEmpty: true,
      errorMessage: 'comment should not be empty',
    },
  });

  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).json({ error: true, message: util.inspect(errors) });
  }
  return next();
};
