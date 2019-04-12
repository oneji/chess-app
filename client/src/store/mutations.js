import * as mutationTypes from './mutation-types'

const mutations = {
    [mutationTypes.SNACKBAR] (state, options) {
        state.snackbar = options;
    },

    [mutationTypes.SET_LAST_VISITED_PAGE] (state, page) {
        state.lastVisitedPage = page;
    },

    [mutationTypes.SET_CONTENT_LOADING] (state, contentLoadingState) {
        state.contentLoading = contentLoadingState;
    },

    [mutationTypes.SET_MOBILE_NAV] (state, mobileNavState) {
        state.mobileNav = mobileNavState;
    }
}

export default mutations