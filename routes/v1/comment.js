const express = require('express');

const router = express.Router();
const commentController = require('./../../controller/commentController');
const commentService = require('./../../service/commentService');
const tokenService = require('./../../service/tokenService');

router.get(
  '/',
  tokenService.isBearerAuthenticated,
  commentController.allComment,
);

router.post(
  '/',
  tokenService.isBearerAuthenticated,
  commentService.addCommentValidator,
  commentController.addComment,
);

module.exports = router;

