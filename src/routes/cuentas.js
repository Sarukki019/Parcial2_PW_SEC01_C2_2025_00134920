const express = require('express');
const router = express.Router();

console.log('[debug] cargando routes/cuentas.js');
const cuentasController = require('../controllers/cuentasController');
console.log('[debug] cuentasController export =>', cuentasController);

const getCuentas = cuentasController.getCuentas;
const getCuentaById = cuentasController.getCuentaById;
const getCuentasBalance = cuentasController.getCuentasBalance;


console.log('[debug] getCuentas typeof:', typeof getCuentas);
console.log('[debug] getCuentaById typeof:', typeof getCuentaById);
console.log('[debug] getCuentasBalance typeof:', typeof getCuentasBalance);

router.get('/cuentas', getCuentas);
router.get('/cuenta/:id', getCuentaById);
router.get('/cuentasBalance', getCuentasBalance);

module.exports = router;