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

        if(state.currentGame) {
            state.currentGame.winner = winner;
        }
    },

    [mutationTypes.SET_CURRENT_GAME] (state, game) {
        state.currentGame = game;
    },

    [mutationTypes.SHOW_FINISH_GAME_FORM] (state, status) {
        state.finishGameForm = status;
    },

    [mutationTypes.SET_FINISH_GAME] (state, gameId) {
        
    },

    [mutationTypes.SET_GAME_HISTORY] (state, historyObj) {
        let { history, fen } = historyObj;
        state.currentGame.history = history;
        state.currentGame.fen = fen;
    }
}