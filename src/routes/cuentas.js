const express = require('express');
const router = express.Router();

console.log('[debug] cargando routes/cuentas.js');
const cuentasController = require('../controllers/cuentasController');
console.log('[debug] cuentasController export =>', cuentasController);

const getCuentas = cuentasController.getCuentas;
const getCuentaById = cuentasController.getCuentaById;

console.log('[debug] getCuentas typeof:', typeof getCuentas);
console.log('[debug] getCuentaById typeof:', typeof getCuentaById);

router.get('/cuentas', getCuentas);
router.get('/cuenta/:id', getCuentaById);

module.exports = router;