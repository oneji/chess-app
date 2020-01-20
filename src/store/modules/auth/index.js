import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import jwt_decode from 'jwt-decode'

// Get the user from decoded token
const token = localStorage.getItem('token');
let decodedToken = null;

if(token !== null) {
    decodedToken = jwt_decode(localStorage.getItem('token'));
}

const authModule = {
    namespaced: true,
    state: {
        loading: false,
        isAuthenticated: !!localStorage.getItem('token'),
        user: decodedToken !== null ? decodedToken.user : null,
        token: localStorage.getItem('token'),
        error: false,
        errorMessage: ''
    },

    getters,
    mutations,
    actions
}

export default authModule