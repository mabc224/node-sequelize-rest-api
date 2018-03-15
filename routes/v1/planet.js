const express = require('express');

const router = express.Router();
const planetController = require('./../../controller/planetController');
const planetService = require('./../../service/planetService');
const tokenService = require('./../../service/tokenService');

router.get(
  '/',
  tokenService.isBearerAuthenticated,
  planetController.allPlanet,
);

router.post(
  '/',
  tokenService.isBearerAuthenticated,
  planetService.addPlanetValidator,
  planetController.addPlanet,
);

router.get(
  '/:id',
  tokenService.isBearerAuthenticated,
  planetService.singlePlanetValidator,
  planetController.singlePlanet,
);

router.put(
  '/:id',
  tokenService.isBearerAuthenticated,
  planetService.singlePlanetValidator,
  planetController.updateSinglePlanet,
);

router.delete(
  '/:id',
  tokenService.isBearerAuthenticated,
  planetService.singlePlanetValidator,
  planetController.removeSinglePlanet,
);

module.exports = router;

