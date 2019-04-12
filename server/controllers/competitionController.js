const slugGenerator = require('limax')
const Competition = require('../models/competition')
const User = require('../models/user')
const Joi = require('joi')

/**
 * Get all user competitions
 * 
 * @param {*} req 
 * @param {*} res
 */
function get(req, res) {
    // Find all user competitions
    Competition.find({}, (err, competitions) => {
        res.json({
            'ok': true,
            'competitions': competitions
        });
    });
}

/**
 * Get a specific competition by ID
 * 
 * @param {*} req 
 * @param {*} res 
 */
function getById(req, res) {
    Competition.find({ '_id': req.params.id }, (err, competition) => {
        res.json({
            'ok': true,
            'competition': competition
        });
    });
}

/**
 * Create a new competition
 * 
 * @param {*} req 
 * @param {*} res 
 */
function create(req, res) {
    // Retreive user from JWT
    var token = req.headers.authorization.split(' ')[1];
    let currentUser = User.getCurrentUser(token);
    
    // Validation
    const schema = Joi.object().keys({
        competitionName: Joi.string().required(),
    });

    Joi.validate(req.body, schema, (err, result) => {
        if(err) {
            res.json({
                'ok': false,
                'error': err.details
            });
        }
    });

    // Creating a competition
    let competition = new Competition({
        competitionName: req.body.competitionName,
        competitionLogo: req.file !== undefined ? req.file.path : null,
        slug: slugGenerator(req.body.competitionName)
    });
    
    // Save competition in the DB
    competition.save((err) => {
        if(err) return console.log(err);

        res.json({
            'ok': true,
            'competition': competition,
            'message': 'Competition has successfully been created.'
        });
    });
}

// Export
module.exports = {
    get,
    getById,
    create
}