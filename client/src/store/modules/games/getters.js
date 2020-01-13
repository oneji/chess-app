export default {
    getGames(state) {
        return state.games;
    },
    
    getCurrentGame(state) {
        return state.currentGame;
    },

    getFinishGameForm(state) {
        return state.finishGameForm;
    }
}