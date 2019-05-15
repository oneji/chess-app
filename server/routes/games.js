const express = require('express')
const router = express.Router()

// Contollers
const GameController = require('../controllers/gameController')

// Routes
router.get('/', GameController.get);
router.post('/', GameController.create);
// Export
module.exports = router