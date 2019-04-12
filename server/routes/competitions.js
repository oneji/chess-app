const express = require('express')
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname)
    }
});

const upload = multer({ storage: storage });


// Models
const Competition = require('../models/competition')

// Contollers
const CompetitionController = require('../controllers/competitionController')

// Routes
router.get('/', CompetitionController.get);
router.get('/getById/:id', CompetitionController.getById);
router.post('/', upload.single('competitionLogo'), CompetitionController.create);

// Export
module.exports = router
