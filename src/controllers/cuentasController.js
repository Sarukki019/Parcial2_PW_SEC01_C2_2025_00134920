const cuentas = require('../data/cuentas.json');

function getCuentas(req, res) {
  const q = req.query.queryParam;
  if (!q) {
    return res.json({ count: Array.isArray(cuentas) ? cuentas.length : 0, data: Array.isArray(cuentas) ? cuentas : [] });
  }

  const qLower = String(q).toLowerCase();

  const matchById = (cuentas || []).filter(c => c && c._id === q);
  if (matchById.length === 1) {
    return res.json({ finded: true, account: matchById[0] });
  }

  const matchByNameOrGender = (cuentas || []).filter(c => {
    if (!c) return false;
    const name = c.client ? String(c.client).toLowerCase() : '';
    const gender = c.gender ? String(c.gender).toLowerCase() : '';
    return name.includes(qLower) || gender === qLower;
  });

  if (matchByNameOrGender.length === 0) return res.json({ finded: false });
  if (matchByNameOrGender.length === 1) return res.json({ finded: true, account: matchByNameOrGender[0] });
  return res.json({ finded: true, data: matchByNameOrGender });
}

function getCuentaById(req, res) {
  const { id } = req.params;
  const found = (cuentas || []).find(c => c && c._id === id);
  if (!found) return res.json({ finded: false, account: null });
  return res.json({ finded: true, account: found });
}

module.exports = { getCuentas, getCuentaById };