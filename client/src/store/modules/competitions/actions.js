import api from '@/api/competitions'
import * as mutationTypes from './mutation-types'
import * as rootMutationTypes from '../../mutation-types'
import store from '@/store';

export default {
    async getCompetitions({ state, commit, rootState }) {       
        let { data } = await api.getCompetitions();

        if(!data.ok) console.log('competitions error');
        else {            
            commit(mutationTypes.SET_COMPETITIONS, data.competitions);
            commit('setContentLoading', false, { root: true });
        }
    },

    async addPlayers({ state, commit, rootState }, players) {
        let competition = store.getters['competitions/getCompetition'];
        let { data } = await api.addPlayers(competition._id, players);

        if(!data.ok) console.log('competitions error');
        else {
            commit(mutationTypes.SET_COMPETITION_PLAYERS, data.players);
            commit(rootMutationTypes.SNACKBAR, {
                color: 'success',
                active: true,
                text: data.message
            }, { root: true });
        }
    },

    async deletePlayers({ state, commit }, playerId) {
        let competition = store.getters['competitions/getCompetition'];
        let { data } = await api.deletePlayers(competition._id, playerId);

        if(!data.ok) console.log('competitions error');
        else {
            commit(mutationTypes.DELETE_COMPETITION_PLAYER, playerId);
            commit(rootMutationTypes.SNACKBAR, {
                color: 'success',
                active: true,
                text: data.message
            }, { root: true });
        }
    },

    async createCompetition({ state, commit, rootState }, competitionData) {
        let { data } = await api.createCompetition(competitionData);

        if(!data.ok) console.log(data);
        else {
            commit(mutationTypes.CREATE_COMPETITION, data.competition);
            commit(rootMutationTypes.SNACKBAR, {
                color: 'success',
                active: true,
                text: data.message
            }, { root: true });
        }
    },

    async getCompetitionBySlug({ state, commit }, competitionSlug) {
        let { data } = await api.getCompetitionBySlug(competitionSlug);

        if(!data.ok) console.log('...')
        else {
            commit(mutationTypes.SET_COMPETITION, data.competition);
            commit('setContentLoading', false, { root: true });
        }
    },

    async deleteCompetition({ state, commit, rootState }, competitionId) {
        let { data } = await api.deleteCompetition(competitionId);

        if(!data.ok) console.log('error')
        else {
            commit(mutationTypes.DELETE_COMPETITION, competitionId);
            commit(rootMutationTypes.SNACKBAR, {
                color: 'success',
                active: true,
                text: data.message
            }, { root: true });
        }
    },

    setCreateCompetition({ state, commit, rootState }, createCompetitionState) {
        commit(mutationTypes.SET_CREATE_COMPETITION, createCompetitionState);
    }
}