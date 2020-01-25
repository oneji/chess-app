import * as mutationTypes from './mutation-types'

export default {
    [mutationTypes.SET_PLAYERS] (state, players) {
        state.players = players;
    },

    [mutationTypes.DELETE_PLAYER] (state, playerId) {
        state.players = state.players.filter(player => player._id !== playerId);
    },

    [mutationTypes.SET_CREATE_PLAYER] (state, createPlayerState) {
        state.createPlayer = createPlayerState;
    },

    [mutationTypes.CREATE_PLAYER] (state, newPlayer) {
        state.players = [...state.players, newPlayer];
    },

    [mutationTypes.DELETE_PLAYER] (state, playerId) {
        state.players = state.players.filter(player => {
            return player._id.toString() !== playerId.toString();
        });
    }
}