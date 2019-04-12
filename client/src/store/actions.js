import * as mutationTypes from './mutation-types'

const actions = {
    snackbar({ commit }, options) {
        commit(mutationTypes.SNACKBAR, options);
    },

    contentLoading({ commit }, contentLoadingState) {
        commit(mutationTypes.SET_CONTENT_LOADING, contentLoadingState);
    },

    mobileNav({ commit }, mobileNavState) {
        commit(mutationTypes.SET_MOBILE_NAV, mobileNavState);
    }
}

export default actions