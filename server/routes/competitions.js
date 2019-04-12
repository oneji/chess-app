const express = require('express')
const router = express.Router()
// Models
const Competition = require('../models/competition')
// Contollers
const CompetitionController = require('../controllers/competitionController')

// Routes
router.get('/', CompetitionController.get);
router.get('/getById/:id', CompetitionController.getById);
router.post('/', CompetitionController.create);

// Export
module.exports = router
