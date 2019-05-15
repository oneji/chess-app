const getters = {
    snackbar: state => {
        return state.snackbar;
    },

    getLastVisitedPage: state => {
        return state.lastVisitedPage;
    },

    getContentLoading: state => {
        return state.contentLoading;
    },

    mobileNav: state => {
        return state.mobileNav;
    },

    getCountries: state => {
        return state.countries;
    }
}

export default getters