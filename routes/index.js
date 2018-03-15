const express = require('express');

const router = express.Router();
const authenticationRoutes = require('./v1/authentication');
const planetRoutes = require('./v1/planet');
const commentRoutes = require('./v1/comment');


router.get('/', (req, res) => res.status(200).send({
  error: false,
  message: 'Welcome to the beginning of api.',
}));

router.use('/', authenticationRoutes);

router.use('/planets', planetRoutes);

router.use('/comments', commentRoutes);

module.exports = router;
