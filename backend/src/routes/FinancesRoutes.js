const express = require('express');

const routes = express.Router();

const FinancesController = require('../controllers/FinancesController');

routes.post('/financesNow', FinancesController.createNowOperation);
routes.post('/financesFuture', FinancesController.createFutureOperation);
routes.post('/financesPayment', FinancesController.receiveMemberPayment);
routes.get('/finances', FinancesController.index);
routes.delete('/finances', FinancesController.delete);

module.exports = routes;