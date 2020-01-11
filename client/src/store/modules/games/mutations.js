import * as mutationTypes from './mutation-types'

export default {
    [mutationTypes.SET_GAMES] (state, games) {
        state.games = games;
    },

    [mutationTypes.START_GAME] (state, gameID) {
        state.games.map(game => {
            game._id.toString() === gameID.toString() ? game.started = true : null;
        });
    },

    [mutationTypes.SET_WINNER] (state, params) {
        let { gameId, winner } = params;

        state.games.map(game => {
            if(game._id.toString() === gameId.toString()) {
                game.winner = winner;
            }
        });
    }
}