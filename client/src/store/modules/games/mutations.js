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

    [mutationTypes.SET_FINISH_GAME] (state, game) {
        if(state.currentGame === {}) {
            state.games = state.games.map(item => {
                if(item._id.toString() === game._id.toString()) {
                    item.ended = game.ended;
                    item.whitesTime = game.whitesTime;
                    item.blacksTime = game.blacksTime;
                }
    
                return item;
            });
        } else {
            state.currentGame.ended = game.ended;
            state.currentGame.whitesTime = game.whitesTime;
            state.currentGame.blacksTime = game.blacksTime;
        }
    },

    [mutationTypes.SET_GAME_HISTORY] (state, historyObj) {
        let { history, fen } = historyObj;
        state.currentGame.history = history;
        state.currentGame.fen = fen;
    },

    [mutationTypes.SET_BOARD_GO_TO_IDX] (state, idx) {
        state.boardGoToIdx = idx;
    }
}