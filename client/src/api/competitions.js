import axios from '@/axios'

export default {
    getCompetitions() {
        return axios.get('/competitions');
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
    }
}