import axios from '@/axios'

export default {
    getPlayers() {
        return axios.get('/players');
    },

    createPlayer(data) {
        return axios.post('/players', data);
    }
}