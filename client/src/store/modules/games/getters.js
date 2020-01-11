export default {
    getCompetitions(state) {
        return state.competitions;
    },

    createCompetition(state) {
        return state.createCompetition;
    },

    getCompetition(state) {
        return state.currentCompetition;
    },
}