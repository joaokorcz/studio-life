const express = require('express');
const cors = require('cors');

const FinancesRoutes = require('./routes/FinancesRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use(FinancesRoutes);

app.listen(3333);