const express = require('express');
const app = express();
const cuentasRoutes = require('./routes/cuentas');

app.use(express.json());
app.use('/', cuentasRoutes);

const PORT = process.env.PORT || 3130;
app.listen(PORT, () => console.log(`Servidor iniciado en http://localhost:${PORT}`));