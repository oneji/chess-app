export default {
    getCompetitions(state) {
        return state.competitions;
    },

    finishCompetitionFab(state) {
        return state.finishCompetitionFab;
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