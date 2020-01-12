import axios from '@/axios'

export default {
    getCompetitionGames(competitionId) {
        return axios.get(`/games/${competitionId}`);
    },

    startGame(gameID) {
        return axios.post(`/games/start/${gameID}`);
    },

    setWinner(gameId, playerId) {
        return axios.post(`/games/${gameId}/setTheWinner`, { playerId });
    },

    getById(gameId) {
        return axios.get(`/games/getById/${gameId}`);
    }
}