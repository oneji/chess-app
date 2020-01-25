import api from '@/api/games'
import * as mutationTypes from './mutation-types'
import * as rootMutationTypes from '../../mutation-types'
import store from '@/store';

export default {
    async getCompetitionGames({ state, commit, rootState }, competitionId) {
        let { data } = await api.getCompetitionGames(competitionId);

        if(!data) console.log('games error');
        else {
            commit(mutationTypes.SET_GAMES, data.games);
        }
    },

    async getById({ state, commit }, gameId) {
        commit('setContentLoading', true, { root: true });
        let { data } = await api.getById(gameId);

        if(!data) console.log('games error');
        else {
            commit(mutationTypes.SET_CURRENT_GAME, data.game);
            commit('setContentLoading', false, { root: true });
        }
    },

    async startGame({ state, commit }, game) {
        let { data } = await api.startGame(game._id);

        if(!data.ok) console.log('error')
        else {
            commit(mutationTypes.START_GAME, game);
            commit(rootMutationTypes.SNACKBAR, {
                color: 'success',
                active: true,
                text: data.message
            }, { root: true });
        }
    },

    async setWinner({ state, commit, rootState }, params) {
        let { game, playerId } = params;
        let { data } = await api.setWinner(game._id, playerId);

        if(!data) console.log('games error');
        else {
            commit(mutationTypes.SET_WINNER, {
                game: data.game,
                winner: data.game.winner
            });
        }
    },

    async finishGame({ state, commit }, options) {
        let { data } = await api.finishGame(options);

        if(!data) console.log('games error');
        else {
            commit(mutationTypes.SET_FINISH_GAME, data.game);
            commit(mutationTypes.SET_WINNER, {
                game: data.game,
                winner: data.game.winner
            });

            commit(mutationTypes.SHOW_FINISH_GAME_FORM, false);
            commit(rootMutationTypes.SNACKBAR, {
                color: 'success',
                active: true,
                text: data.message
            }, { root: true });
        }
    },

    showFinishGameForm({ state, commit }, { status, game }) {
        commit(mutationTypes.SHOW_FINISH_GAME_FORM, status);

        if(status) {
            commit(mutationTypes.SET_CURRENT_GAME, game);
        }
    },

    async setHistory({ state, commit }, { gameId, history, fen }) {
        let { data } = await api.setHistory(gameId, { history, fen });

        if(!data) console.log('game error');
        else {
            console.log(data)
            commit(mutationTypes.SET_GAME_HISTORY, { history, fen });
            commit(rootMutationTypes.SNACKBAR, {
                color: 'success',
                active: true,
                text: data.message
            }, { root: true });
        }
    },

    setBoardGoToIdx({ state, commit }, idx) {
        commit(mutationTypes.SET_BOARD_GO_TO_IDX, idx);
    }
}