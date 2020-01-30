import * as mutationTypes from './mutation-types'

export default {
    [mutationTypes.SET_GAMES] (state, games) {
        state.games = games;
    },

    [mutationTypes.START_GAME] (state, game) {
        state.games[game.gameType].items.map(g => {
            g._id.toString() === game._id.toString() ? g.started = true : null;
        });
    },

    [mutationTypes.SET_WINNER] (state, params) {
        let { game, winner } = params;

        state.games[game.gameType].items.map(g => {
            if(g._id.toString() === game._id.toString()) {
                g.winner = winner;
            }
        });

        if(state.currentGame) {
            state.currentGame.winner = winner;
        }
    },

    [mutationTypes.SET_CURRENT_GAME] (state, { game, stats = {} }) {
        state.currentGame = game;
        state.gamePlayerStats = stats;
    },

    [mutationTypes.SHOW_FINISH_GAME_FORM] (state, status) {
        state.finishGameForm = status;
    },

    [mutationTypes.SET_FINISH_GAME] (state, game) {
        if(state.currentGame === {}) {
            state.games = state.games[game.gameType].items.map(item => {
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
        let { pgn, fen } = historyObj;
        state.currentGame.pgn = pgn;
        state.currentGame.fen = fen;
    },

    [mutationTypes.SET_BOARD_GO_TO_IDX] (state, idx) {
        state.boardGoToIdx = idx;
    },

    [mutationTypes.SET_NEXT_ROUND_GAMES] (state, newGames) {
        state.games.push(newGames);
    }
}