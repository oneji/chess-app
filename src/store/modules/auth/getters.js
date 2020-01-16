export default {
    getUser(state) {
        return state.user;
    },

    isAuthenticated(state) {
        return state.isAuthenticated;
    },

    getAuthError(state) {
        const errorObj = {
            error: state.error,
            errorMessage: state.errorMessage
        }

        return errorObj;
    },

    getAuthLoadingState(state) {
        return state.loading;
    }
}