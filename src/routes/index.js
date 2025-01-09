// src/routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Landing Page',
    description: 'Uma solução inovadora para suas necessidades'
  });
});

module.exports = router;
