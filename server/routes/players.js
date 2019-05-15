const express = require('express')
const router = express.Router()

// Contollers
const PlayerController = require('../controllers/playerController')

// Routes
router.get('/', PlayerController.get);
router.post('/', PlayerController.create);
// Export
module.exports = router