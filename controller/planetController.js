const got = require('got');

const { SWAPI_BASE_URL } = require('./../config/appConfig');

const { Planet } = require('../models');

exports.addPlanet = async function addPlanet(req, res) {
  const { name } = req.body;

  try {
    const response = await got(`${SWAPI_BASE_URL}/planets/?search=${name}`, { json: true });

    if (response.body.results.length) {
      const data = response.body.results[0];
      delete data.created;
      delete data.edited;
      return Planet.create(data)
        .then(planet => res.status(200).json({ error: false, data: planet }))
        .catch(err => res.status(500).json({ error: true, message: err.message }));
    }
    return res.status(404).json({ error: false, data: 'Not data found on SWAPI, so can\'t add new planet.' });
  } catch (err) {
    return res.status(500).json({ error: true, message: err.message });
  }
};

exports.allPlanet = function allPlanet(req, res) {
  const order = [['id', 'ASC']];
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  Planet
    .findAll({ order, limit, offset })
    .then(planets => res.status(200).json({ error: false, data: planets }))
    .catch(err => res.status(500).json({ error: true, message: err.message }));
};

exports.singlePlanet = function singlePlanet(req, res) {
  Planet.findById(req.params.id)
    .then((planet) => {
      if (!planet) {
        return res.status(400).send({ error: 'No planet found' });
      }
      return res.status(200).json({ error: false, data: planet });
    })
    .catch(err => res.status(500).send({ error: true, message: err.message }));
};


exports.removeSinglePlanet = function removeSinglePlanet(req, res) {
  Planet
    .find({
      where: {
        id: req.params.id,
      },
    })
    .then((planet) => {
      if (!planet) {
        return res.status(404).send({
          message: 'Planet Not Found',
        });
      }

      return planet
        .destroy()
        .then(() => res.status(204).json({ error: false, data: 'Deleted' }))
        .catch(err => res.status(500).json({ error: true, message: err.message }));
    })
    .catch(err => res.status(500).json({ error: true, message: err.message }));
};


exports.updateSinglePlanet = function updateSinglePlanet(req, res) {
  const data = req.body;
  Planet.update(
    data,
    { returning: true, where: { id: req.params.id } },
  ).then(([rowsUpdate, [updatedPlanet]]) => {
    if (!rowsUpdate) {
      return res.status(404).send({
        message: 'Planet Not Found',
      });
    }
    return updatedPlanet;
  }).then(planets => res.status(200).json({ error: false, data: planets }))
    .catch(err => res.status(500).json({ error: true, message: err.message }));
};
