const Game = require('../models/game');
const Joi = require('joi');

/**
 * Get all competition's games
 * 
 * @param {*} req 
 * @param {*} res
 */
function get(req, res) {
    // Find all competition's games
    Game.find({})
    .populate('whites')
    .populate('blacks')
    .exec((err, games) => {
        res.json({
            'ok': true,
            'games': games
        });
    })
}

function generateGames(shuffledPlayers, competition) {
    // Games array to be added to a competition
    let games = [];
    whites = shuffledPlayers.whites;
    blacks = shuffledPlayers.blacks;

    for(let i = 0; i < whites.length; i++) {
        // Defining white and black players
        let whitePlayer = whites[i];
        let blackPlayer = blacks[i];

        // Creating a game
        let game = new Game({
            whites: whitePlayer,
            whitesTime: null,
            blacks: blackPlayer,
            blacksTime: null,
            winner: null,
            competition: competition,
        });

        Game.insertMany(games, (err) => {
            if(err) return console.log(err);
        });
    }

    return games;
}

/**
 * Create a new game
 * 
 * @param {*} req 
 * @param {*} res 
 */
function create(req, res) {
    // Validation
    // const schema = Joi.object().keys({
    //     gameType: Joi.string().required(),
    //     competition: Joi.optional()
    // });

    // Joi.validate(req.body, schema, (err, result) => {
    //     if(err) {
    //         res.json({
    //             'ok': false,
    //             'error': err.details
    //         });
    //     }
    // });

    // Creating a game
    let game = new Game({
        gameType: req.body.gameType,
        whites: req.body.whites,
        whitesTime: req.body.whitesTime,
        blacks: req.body.blacks,
        blacksTime: req.body.blacksTime,
        winner: req.body.winner,
        competition: req.body.competition,
    });
    
    // Save game in the DB
    game.save((err) => {
        if(err) return console.log(err);

        res.json({
            'ok': true,
            'game': game,
            'message': 'Game has successfully been created.'
        });
    });
}

module.exports = {
    get,
    create,
    generateGames
}