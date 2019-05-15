import api from '@/api/competitions'
import * as mutationTypes from './mutation-types'
import * as rootMutationTypes from '../../mutation-types'

export default {
    async getCompetitions({ state, commit, rootState }) {
        commit('setContentLoading', true, { root: true });        
        let { data } = await api.getCompetitions();

        if(!data.ok) console.log('competitions error');
        else {            
            commit(mutationTypes.SET_COMPETITIONS, data.competitions);
            commit('setContentLoading', false, { root: true });
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
        commit('setContentLoading', true, { root: true });
        let { data } = await api.getCompetitionBySlug(competitionSlug);

        if(!data.ok) console.log('...')
        else {
            commit(mutationTypes.SET_COMPETITION, data.competition);
            commit('setContentLoading', false, { root: true });
        }
    },

    deleteCompetition({ state, commit, rootState }, competitionId) {
        commit(mutationTypes.DELETE_COMPETITION, competitionId);
    },

    setCreateCompetition({ state, commit, rootState }, createCompetitionState) {
        commit(mutationTypes.SET_CREATE_COMPETITION, createCompetitionState);
    }
}