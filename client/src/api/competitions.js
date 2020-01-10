import axios from '@/axios'

export default {
    getCompetitions() {
        return axios.get('/competitions');
    },

    createCompetition(data) {
        return axios.post('/competitions', data);
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