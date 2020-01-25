import axios from 'axios'
import store from './store'

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

const token = localStorage.getItem('token');

if (token !== undefined) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Response interceptor
instance.interceptors.response.use(response => {
    return response;
}, err => {
    if(err.response.status === 500) {
        store.dispatch('snackbar', {
            color: 'error',
            active: true,
            text: 'Неизвестная ошибка на сервере.'
        });
    }
});

export default instance