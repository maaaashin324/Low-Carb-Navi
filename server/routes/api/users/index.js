const express = require('express');

const router = express.Router();

module.exports = (services) => {
  router.post('', (req, res) => services.db.users.createUsers({ email: req.body.email, userName: req.body.userName })
    .then(successRes => res.status(201).json(successRes))
    .catch(err => res.status(400).send(err.message)));

  return router;
};
