const { request } = require('express');
const express = require('express');

const routes = express.Router();

const FinancesController = require('../controllers/FinancesController');

routes.post('/finances', FinancesController.create);
routes.get('/finances', FinancesController.index);

module.exports = routes;