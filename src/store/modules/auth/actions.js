import api from '@/api/auth'
import * as mutationTypes from './mutation-types'
import router from '@/router/index'

export default {
    async login({ state, commit, rootState }, credentials) {
        // Loading state of login page
        commit(mutationTypes.AUTH_LOADING);

        let { data } = await api.login(credentials);
        
        if(!data.ok) commit(mutationTypes.AUTH_FAILED, data.message);
        else {
            commit(mutationTypes.AUTH_SUCCESS, data);
            // get last visited page from vuex root state
            let lastPage = rootState.lastVisitedPage;
            // Redirect if login successfull
            if(lastPage !== null) {
                router.push({ path: lastPage });
            } else {
                router.push({ name: 'HomePage' });
            }
        }
    },

    logout({ state, commit }) {
        commit(mutationTypes.LOGOUT);
        router.push({ name: 'Login' });
    }
}