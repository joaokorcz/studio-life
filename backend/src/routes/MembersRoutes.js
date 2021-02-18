const express = require('express');

const routes = express.Router();

const MembersController = require('../controllers/MembersController');

routes.post('/members', MembersController.create);
routes.get('/members', MembersController.index);
routes.put('/members', MembersController.update);
routes.delete('/members', MembersController.delete);

module.exports = routes;