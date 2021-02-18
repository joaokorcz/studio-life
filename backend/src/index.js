const express = require('express');
const cors = require('cors');

const FinancesRoutes = require('./routes/FinancesRoutes');
const MembersRoutes = require('./routes/MembersRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use(FinancesRoutes);
app.use(MembersRoutes);

app.listen(3333);