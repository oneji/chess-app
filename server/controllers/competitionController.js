const slugGenerator = require('limax')
const Competition = require('../models/competition')
const Player = require('../models/player')
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
    Competition.findOne({ 'slug': req.params.slug })
        .populate('players')
        .exec((err, competition) => {
            res.json({
                'ok': true,
                'competition': competition
            });
        })
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
        });
    });
}

/**
 * Add participants to the competition
 * 
 * @param {*} req 
 * @param {*} res 
 */
function addPlayers(req, res) {
    Competition.findOne({ _id: req.params.id })
        .then((competition) => {
            Player.find({ _id: { $in: req.body.players } })
                .then((players) => {
                    let newPlayers = [];
                    // Check for players already participate or not
                    for(let i = 0; i < players.length; i++) {
                        let newPlayer = players[i];
                        let newOne = true;
                        // Check if a player already participates in the competition
                        for(let j = 0; j < competition.players.length; j++) {
                            let oldPlayer = competition.players[j];

                            if(newPlayer._id.toString() === oldPlayer.toString()) {
                                newOne = false;
                            }
                        }
                        // If the player is a new one then add him to the competition players' array
                        if(newOne === true) {
                            competition.players.push(newPlayer);
                            newPlayers.push(newPlayer);
                        }
                    }

                    competition.save((err) => {
                        if(err) return console.log(err);
        
                        res.json({
                            ok: true,
                            message: 'Players are successfully added to the competition.',
                            _id: req.params.id,
                            competition,
                            players: newPlayers
                        });
                    });        
                });
        });    
}

/**
 * Remove participants from the competition
 * 
 * @param {*} req 
 * @param {*} res 
 */
function removePlayers(req, res) {
    Competition.findOne({ _id: req.params.id })
        .then((competition) => {
            competition.players = competition.players.filter(player => {
                return player.toString() !== req.params.playerId.toString()
            });

            competition.save((err) => {
                if(err) return console.log(err);

                res.json({
                    ok: true,
                    message: 'Player has been successfully removed.',
                    params: req.params,
                    competition
                });
            });
        });

    
}

// Export
module.exports = {
    get,
    getById,
    getBySlug,
    create,
    addPlayers,
    removePlayers
}