const express = require('express');
const router = express.Router();

router.use('/competitions', require('./competitions'))
router.use('/auth', require('./auth'))

module.exports = router;