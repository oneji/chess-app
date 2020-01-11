import axios from '@/axios'

export default {
    getCompetitions() {
        return axios.get('/competitions');
    },

    getCompetitionGames(competitionID) {
        return axios.get(`/competitions/${competitionID}/games`);
    },

    createCompetition(data) {
        return axios.post('/competitions', data);
    },

    deleteCompetition(competitionID) {
        return axios.delete(`competitions/remove/${competitionID}`);
    },

    getCompetitionBySlug(slug) {
        return axios.get(`/competitions/getBySlug/${slug}`);
    },

    addPlayers(competitionID, players) {
        return axios.post(`competitions/${competitionID}/addPlayers`, {
            players: players
        });
    },

    deletePlayers(competitionID, playerID) {
        return axios.delete(`competitions/${competitionID}/removePlayers/${playerID}`);
    },

    startCompetition(competitionID) {
        return axios.post(`competitions/start`, {
            id: competitionID
        });
    },

    startCompetitionGame(gameID) {
        return axios.post(`/games/start/${gameID}`);
    }
}