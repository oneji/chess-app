import * as mutationTypes from './mutation-types'
import api from '@/api/util'

const actions = {
    snackbar({ commit }, options) {
        commit(mutationTypes.SNACKBAR, options);
    },

    contentLoading({ commit }, contentLoadingState) {
        commit(mutationTypes.SET_CONTENT_LOADING, contentLoadingState);
    },

    mobileNav({ commit }, mobileNavState) {
        commit(mutationTypes.SET_MOBILE_NAV, mobileNavState);
    },

    async getCountries({ commit }) {
        let countries = await api.getCountries();

        commit(mutationTypes.SET_COUNTRIES, countries);
    }
}

export default actions