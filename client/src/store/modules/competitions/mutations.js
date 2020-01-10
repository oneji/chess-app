import * as mutationTypes from './mutation-types'

export default {
    [mutationTypes.SET_COMPETITIONS] (state, competitions) {
        state.competitions = competitions;
    },

    [mutationTypes.DELETE_COMPETITION] (state, competitionId) {
        state.competitions = state.competitions.filter(competition => competition._id !== competitionId);
    },

    [mutationTypes.SET_CREATE_COMPETITION] (state, createCompetitionState) {
        state.createCompetition = createCompetitionState;
    },

    [mutationTypes.CREATE_COMPETITION] (state, newCompetition) {
        state.competitions = [...state.competitions, newCompetition];
    },

    [mutationTypes.SET_COMPETITION] (state, competition) {
        state.currentCompetition = competition;
    },

    [mutationTypes.SET_COMPETITION_PLAYERS] (state, players) {
        state.currentCompetition.players.push(...players);
    },

    [mutationTypes.DELETE_COMPETITION_PLAYER] (state, playerId) {
        state.currentCompetition.players = state.currentCompetition.players.filter(players => {
            return players._id.toString() !== playerId.toString()
        });
    }
}