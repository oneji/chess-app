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
    Competition.find({})
    .populate('players')
    .exec((err, competitions) => {
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
 * Get a specific competition by SLUG
 * 
 * @param {*} req
 * @param {*} res
 */
function getBySlug(req, res) {
    Competition.find({ 'slug': req.params.slug }, (err, competition) => {
        res.json({
            'ok': true,
            'competition': competition[0]
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
    // Validation
    const schema = Joi.object().keys({
        competitionName: Joi.string().required(),
        competitionLogo: Joi.optional(),
        players: Joi.optional(),
        started: Joi.boolean().optional(),
        deleted: Joi.boolean().optional(),
        createdAt: Joi.optional(),
        slug: Joi.string()
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
        players: req.body.players,
        slug: slugGenerator(req.body.competitionName)
    });
    
    // Save competition in the DB
    competition.save((err) => {
        if(err) return console.log(err);

        res.json({
            'ok': true,
            'competition': competition,
            'message': 'Competition has successfully been created.',
            'data': req.body
        });
    });
}

// Export
module.exports = {
    get,
    getById,
    getBySlug,
    create
}