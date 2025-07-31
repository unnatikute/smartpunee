// routes/shops.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  const { category } = req.query;
  const sql = 'SELECT * FROM shops WHERE category_id = ?';
  db.query(sql, [category], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'DB error fetching shops' });
    }
    res.json(results);
  });
});

module.exports = router;
