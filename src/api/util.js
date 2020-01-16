import axios from '@/axios'

export default {
    getCountries() {
        axios.get('https://restcountries.eu/rest/v2/all');
    }
}