import api from '@/api/players'
import * as mutationTypes from './mutation-types'
import * as rootMutationTypes from '../../mutation-types'

export default {
    async getPlayers({ state, commit, rootState }) {
        commit('setContentLoading', true, { root: true });    
        let { data } = await api.getPlayers();

        if(!data.ok) console.log('players error');
        else {
            commit(mutationTypes.SET_PLAYERS, data.players);
            commit('setContentLoading', false, { root: true });    
        }
    },

    async createPlayer({ state, commit, rootState }, playerData) {
        let { data } = await api.createPlayer(playerData);

        if(!data.ok) console.log(data);
        else {
            console.log(data);
            commit(mutationTypes.CREATE_PLAYER, data.player);
            commit(rootMutationTypes.SNACKBAR, {
                color: 'success',
                active: true,
                text: data.message
            }, { root: true });
        }
    },

    deletePlayer({ state, commit, rootState }, playerId) {
        commit(mutationTypes.DELETE_PLAYER, playerId);
    },

    setCreatePlayer({ state, commit, rootState }, createPlayerState) {
        commit(mutationTypes.SET_CREATE_PLAYER, createPlayerState);
    }
}