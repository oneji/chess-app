import axios from '@/axios'

export default {
    getCompetitionGames(competitionId) {
        return axios.get(`/games/${competitionId}`);
    },

    startGame(gameId) {
        return axios.post(`/games/start/${gameId}`);
    },

    setWinner(gameId, playerId) {
        return axios.post(`/games/${gameId}/setTheWinner`, { playerId });
    },

    getById(gameId) {
        return axios.get(`/games/getById/${gameId}`);
    },

    finishGame(options) {
        let { gameId, time, winner } = options;
        return axios.put(`/games/finish/${gameId}`, {
            whitesTime: time.whites,
            blacksTime: time.blacks,
            winner: winner
        });
    },

    setHistory(gameId, historyObj) {
        let { history, fen } = historyObj;

        return axios.post(`games/saveHistory/${gameId}`, {
            history, 
            fen
        });
    }
}