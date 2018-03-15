const express = require('express');

const router = express.Router();
const authenticationController = require('./../../controller/authenticationController');
const authenticationService = require('./../../service/authenticationService');

router.post(
  '/login',
  authenticationService.handleSignInValidator,
  authenticationController.handleSignIn,
);

router.post(
  '/register',
  authenticationService.handleSignUpValidator,
  authenticationController.handleSignUp,
);

// router.post('/logout', authenticationController.userSignedIn, authenticationController.logOut);

module.exports = router;

