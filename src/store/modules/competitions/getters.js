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

    getNextRoundModal(state) {
        return state.nextRoundModal;
    },

    getChampion(state) {
        return state.champion;
    }
}