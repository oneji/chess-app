const express = require('express')
const router = express.Router()

// Contollers
const GameController = require('../controllers/gameController')

// Routes
router.get('/:competitionId', GameController.get);
router.post('/', GameController.create);
router.post('/start/:id', GameController.start);
router.post('/:id/setTheWinner', GameController.setTheWinner);
// Export
module.exports = router