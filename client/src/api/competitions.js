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
    }
}