const { Planet } = require('../models');

exports.addComment = async function addComment(req, res) {
  const { id } = req.body;
  const { comment } = req.body;

  Planet.update(
    { comment },
    { returning: true, where: { id } },
  ).then(([rowsUpdate, [updatedComment]]) => {
    if (!rowsUpdate) {
      return res.status(404).send({
        message: 'Comment Not Added',
      });
    }
    return updatedComment;
  }).then(planet => res.status(200).json({ error: false, data: { comment: planet.comment } }))
    .catch(err => res.status(500).json({ error: true, message: err.message }));
};

exports.allComment = function allComment(req, res) {
  const params = {};

  if (req.query.planet) {
    params.where = { id: req.query.planet };
  }
  params.attributes = ['comment', 'id'];
  params.order = [['id', 'ASC']];
  params.limit = req.query.limit || 10;
  params.offset = req.query.offset || 0;


  Planet
    .findAll(params)
    .then(planets => res.status(200).json({ error: false, data: planets }))
    .catch(err => res.status(500).json({ error: true, message: err.message }));
};
