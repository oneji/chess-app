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

    async startGame({ state, commit }, gameID) {
        let { data } = await api.startGame(gameID);

        if(!data.ok) console.log('error')
        else {
            commit(mutationTypes.START_GAME, gameID);
            commit(rootMutationTypes.SNACKBAR, {
                color: 'success',
                active: true,
                text: data.message
            }, { root: true });
        }
    },

    async setWinner({ state, commit, rootState }, params) {
        let { gameId, playerId } = params;
        let { data } = await api.setWinner(gameId, playerId);

        if(!data) console.log('games error');
        else {
            commit(mutationTypes.SET_WINNER, {
                gameId: data.game._id.toString(),
                winner: data.game.winner
            });
        }
    }
}